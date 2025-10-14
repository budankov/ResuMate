import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeIcon from '../assets/icons/HomeIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import SettingIcon from '../assets/icons/SettingIcon';
import TemplatesIcon from '../assets/icons/TemplatesIcon';
import HomeScreen from '../screens/main/HomeScreen';
import MoreScreen from '../screens/main/MoreScreen';
import TemplatesScreen from '../screens/main/TemplatesScreen';
import { colors } from '../styles/colors';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.fonts,
        // headerRight: () => <HomeIcon />,
        // headerLeft: () => <BackButton />,
        // headerTitle: () => <CustomTitle />,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
          title: 'Головна',
        }}
      />
      <Tab.Screen
        name="Templates"
        component={TemplatesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TemplatesIcon color={color} size={size} />
          ),
          title: 'Шаблони',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon color={color} size={size} />
          ),
          title: 'Профіль',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SettingIcon color={color} size={size} />
          ),
          title: 'Більше',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
