import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./src/navigation/RootStack";
import { persistor, store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size={"large"} />}
        persistor={persistor}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <BottomSheetModalProvider>
              <Navigation />
            </BottomSheetModalProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
