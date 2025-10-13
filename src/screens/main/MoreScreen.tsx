import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MoreScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>MoreScreen</Text>
        <Text>MoreScreen</Text>
        <Text>MoreScreen</Text>
        <Text>MoreScreen</Text>
        <Text>MoreScreen</Text>
        <Text>MoreScreen</Text>
        <Text>MoreScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MoreScreen;
