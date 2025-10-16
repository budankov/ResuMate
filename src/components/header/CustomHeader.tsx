import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon';
import { screens } from '../../screens/profile/ScreenList';
import { colors } from '../../styles/colors';

type CustomHeaderProps = {
  navigation: any;
  route: any;
  back?: any;
};

const CustomHeader: FC<CustomHeaderProps> = ({ navigation, route, back }) => {
  if (route.name === 'ProfileScreen') return null;

  const screen = screens.find(screen => screen.name === route.name);
  const title = screen ? screen.title : route.name;

  return (
    <View style={styles.header}>
      {back && (
        <Pressable onPress={navigation.goBack}>
          <ChevronLeftIcon size={30} color={colors.fonts} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: vs(50),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(16),
  },
  back: {
    color: colors.fonts,
    fontSize: s(16),
  },
  title: {
    color: colors.fonts,
    fontWeight: 'bold',
    fontSize: s(16),
    marginLeft: s(20),
  },
});

export default CustomHeader;
