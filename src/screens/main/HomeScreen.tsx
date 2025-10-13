import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlassButton from '../../components/buttons/GlassButton';
import { colors } from '../../styles/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.primary }}
      edges={['top']}
    >
      <View style={styles.container}>
        <Text>Home</Text>
        <GlassButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
export default HomeScreen;
