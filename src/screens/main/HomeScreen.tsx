import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { colors } from '../../styles/colors';

const HomeScreen = () => {
  const profile = useSelector((state: RootState) => state.profile);
  console.log(profile);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    color: 'white',
  },
});
export default HomeScreen;
