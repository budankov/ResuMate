import React, { FC } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon';
import { screens } from '../../screens/profile/ScreenList';
import { colors } from '../../styles/colors';

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
  if (route.name === 'ProfileScreen') return null;

  const screen = screens.find(screen => screen.name === route.name);
  const title = screen ? screen.title : route.name;
  const headerRight = options?.headerRight?.();
  const isDirty = route.params?.isDirty;

  const handleBackPress = () => {
    if (isDirty) {
      Alert.alert(
        'Незбережені зміни',
        'Ви внесли зміни, але не зберегли їх. Вийти без збереження?',
        [
          { text: 'Скасувати', style: 'cancel' },
          { text: 'Вийти', style: 'destructive', onPress: navigation.goBack },
        ],
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      {back && (
        <Pressable onPress={handleBackPress}>
          <ChevronLeftIcon size={30} color={colors.fonts} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      {headerRight}
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
