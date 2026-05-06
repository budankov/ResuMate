import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

const TemplatesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TemplatesScreen</Text>
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
export default TemplatesScreen;
