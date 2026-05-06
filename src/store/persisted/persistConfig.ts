import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import cardsSlice from '../slices/cardsSlice';
import languageSlice from '../slices/languageSlice';
import profileSlice from '../slices/profileSlice';

const languagePersistConfig = {
  key: 'language',
  storage: AsyncStorage,
};

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
};

const cardsPersistConfig = {
  key: 'cards',
  storage: AsyncStorage,
};

export const persistedLanguageSlice = persistReducer(
  languagePersistConfig,
  languageSlice,
);

export const persistedProfileSlice = persistReducer(
  profilePersistConfig,
  profileSlice,
);

export const persistedCardsSlice = persistReducer(
  cardsPersistConfig,
  cardsSlice,
);
