import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/main/HomeScreen';
import MoreScreen from '../screens/main/MoreScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import TemplatesScreen from '../screens/main/TemplatesScreen';

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#A0A0A0',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Templates" component={TemplatesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
