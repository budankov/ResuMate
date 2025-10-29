import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import languageSlice from '../slices/languageSlice';
import profileSlice from '../slices/profileSlice';

const languagePersistConfig = {
  key: 'language',
  storage: AsyncStorage,
  whitelist: ['userLanguage'],
};

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
  // whitelist: ['personalInfo'],
};

export const persistedLanguageSlice = persistReducer(
  languagePersistConfig,
  languageSlice,
);

export const persistedProfileSlice = persistReducer(
  profilePersistConfig,
  profileSlice,
);
