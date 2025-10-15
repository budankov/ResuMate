import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import ProfileButton from '../../components/buttons/ProfileButton';
import { colors } from '../../styles/colors';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ProfileButton
        onPress={() => navigation.navigate('PersonalInformationScreen')}
        title="Персональна інформація"
        children={<ProfileIcon />}
      />
      <ProfileButton
        onPress={() => navigation.navigate('ProfessionalGoalsScreen')}
        title="Професійні цілі"
        children={<ProfileIcon />}
      />
      <ProfileButton
        onPress={() => navigation.navigate('WorkExperienceScreen')}
        title="Досвід роботи"
        children={<ProfileIcon />}
      />
      <ProfileButton
        onPress={() => navigation.navigate('EducationScreen')}
        title="Освіта"
        children={<ProfileIcon />}
      />
      <ProfileButton
        onPress={() => navigation.navigate('SkillsScreen')}
        title="Навички"
        children={<ProfileIcon />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
  },
  title: {
    color: 'white',
  },
});
export default ProfileScreen;
