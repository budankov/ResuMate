import { createStaticNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import CreateScreen from "../screens/CreateScreen";

const Tabs = createNativeBottomTabNavigator({
  screenOptions: {
    headerShown: true,
    tabBarActiveTintColor: "#f76f30",
    tabBarBlurEffect:
      Platform.OS === "ios" ? "systemUltraThinMaterial" : undefined,
    tabBarStyle: {},
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon:
          Platform.OS === "ios"
            ? { type: "sfSymbol", name: "house" }
            : { type: "image", source: require("../../assets/icon.png") },
      },
    },
    Create: {
      screen: CreateScreen,
      options: {
        tabBarIcon:
          Platform.OS === "ios"
            ? { type: "sfSymbol", name: "plus.app" }
            : { type: "image", source: require("../../assets/icon.png") },
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        tabBarIcon:
          Platform.OS === "ios"
            ? { type: "sfSymbol", name: "gearshape" }
            : { type: "image", source: require("../../assets/icon.png") },
      },
    },
  },
});

export const Navigation = createStaticNavigation(Tabs);
