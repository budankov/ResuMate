import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {
  persistedCardsSlice,
  persistedLanguageSlice,
  persistedProfileSlice,
} from './persisted/persistConfig';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    language: persistedLanguageSlice,
    profile: persistedProfileSlice,
    userSlice,
    cards: persistedCardsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
