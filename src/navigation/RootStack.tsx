import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import { createStaticNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import HomeScreen from "../screens/main/HomeScreen";
import MoreScreen from "../screens/main/MoreScreen";
import TemplatesScreen from "../screens/main/TemplatesScreen";
import ProfileStack from "./ProfileStack";

const Tabs = createNativeBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: "#f76f30",
    tabBarBlurEffect:
      Platform.OS === "ios" ? "systemUltraThinMaterial" : undefined,
    tabBarStyle: {},
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Головна",
        tabBarLabel: "Головна",
        tabBarIcon:
          Platform.OS === "ios"
            ? { type: "sfSymbol", name: "house" }
            : { type: "image", source: require("../../assets/icon.png") },
      },
    },
    Templates: {
      screen: TemplatesScreen,
      options: {
        title: "Шаблони",
        tabBarLabel: "Шаблони",
        tabBarIcon:
          Platform.OS === "ios"
            ? { type: "sfSymbol", name: "document.on.document" }
            : { type: "image", source: require("../../assets/icon.png") },
      },
    },
    Profile: {
      screen: ProfileStack,
      options: {
        title: "Профіль користувача",
        tabBarLabel: "Профіль",
        tabBarIcon:
          Platform.OS === "ios"
            ? { type: "sfSymbol", name: "person" }
            : { type: "image", source: require("../../assets/icon.png") },
      },
    },
    More: {
      screen: MoreScreen,
      options: {
        title: "Більше",
        tabBarLabel: "Більше",
        tabBarIcon:
          Platform.OS === "ios"
            ? { type: "sfSymbol", name: "gearshape" }
            : { type: "image", source: require("../../assets/icon.png") },
      },
    },
  },
});

export const Navigation = createStaticNavigation(Tabs);
