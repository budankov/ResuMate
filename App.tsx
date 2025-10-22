import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './src/navigation/RootNavigator';
import { persistor, store } from './src/store/store';
import { colors } from './src/styles/colors';

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size={'large'} />}
        persistor={persistor}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.safeArea} edges={['top']}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
});

export default App;
