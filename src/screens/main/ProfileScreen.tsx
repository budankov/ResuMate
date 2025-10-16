import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import ProfileButton from '../../components/buttons/ProfileButton';
import { colors } from '../../styles/colors';
import { screens } from '../profile/ScreenList';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{ backgroundColor: colors.primary }}
      contentContainerStyle={styles.container}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          alignSelf: 'center',
          paddingBottom: 10,
        }}
      >
        Профіль користувача
      </Text>
      {screens.map(screen => {
        const Icon = screen.icon;
        return (
          <ProfileButton
            key={screen.name}
            onPress={() => navigation.navigate(screen.name)}
            title={screen.title}
            children={<Icon />}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: s(10),
    paddingVertical: vs(20),
    backgroundColor: colors.primary,
  },
});
export default ProfileScreen;
