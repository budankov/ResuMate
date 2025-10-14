import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('PersonalInformationScreen')}
      >
        <Text style={styles.title}>Персональна інформація</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('ProfessionalGoalsScreen')}
      >
        <Text style={styles.title}>Професійні цілі</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
