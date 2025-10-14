import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppBottomTabs from './AppBottomTabs';
import ProfileStack from './ProfileStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTabs" component={AppBottomTabs} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
