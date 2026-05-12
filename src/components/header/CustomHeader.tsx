import Entypo from "@expo/vector-icons/Entypo";
import React, { FC } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import { IS_IOS } from "../../constants/constants";
import { screens } from "../../screens/profile/ScreenList";
import { colors } from "../../styles/colors";

type CustomHeaderProps = {
  navigation: any;
  route: any;
  back?: any;
  options?: any;
};

const CustomHeader: FC<CustomHeaderProps> = ({
  navigation,
  route,
  back,
  options,
}) => {
  if (route.name === "ProfileScreen") return null;

  const screen = screens.find((screen) => screen.name === route.name);
  const title = screen ? screen.title : route.name;
  const headerRight = options?.headerRight?.();
  const isDirty = route.params?.isDirty;
  const insets = useSafeAreaInsets();

  const handleBackPress = () => {
    if (isDirty) {
      Alert.alert(
        "Незбережені зміни",
        "Ви внесли зміни, але не зберегли їх. Вийти без збереження?",
        [
          { text: "Скасувати", style: "cancel" },
          { text: "Вийти", style: "destructive", onPress: navigation.goBack },
        ],
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: insets.top,
          height: IS_IOS ? insets.top + vs(44) : insets.top + vs(56),
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {back && (
          <Pressable onPress={handleBackPress}>
            <Entypo name="chevron-left" size={30} color={colors.fonts} />
          </Pressable>
        )}
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.title, isDirty && { maxWidth: "70%" }]}
        >
          {title}
        </Text>
      </View>
      {headerRight}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: s(16),
  },
  back: {
    color: colors.fonts,
    fontSize: s(16),
  },
  title: {
    color: colors.fonts,
    fontWeight: "bold",
    fontSize: s(16),
    marginLeft: s(20),
  },
});

export default CustomHeader;
