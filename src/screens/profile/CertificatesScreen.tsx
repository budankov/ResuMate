import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

const CertificatesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CertificatesScreen</Text>
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

export default CertificatesScreen;
