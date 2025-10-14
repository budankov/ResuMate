import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/main/ProfileScreen';
import PersonalInformationScreen from '../screens/profile/PersonalInformationScreen';
import ProfessionalGoalsScreen from '../screens/profile/ProfessionalGoalsScreen';
import { colors } from '../styles/colors';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.yellow,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 15,
        },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalInformationScreen"
        component={PersonalInformationScreen}
        options={{ title: 'Персональна інформація' }}
      />
      <Stack.Screen
        name="ProfessionalGoalsScreen"
        component={ProfessionalGoalsScreen}
        options={{ title: 'Професійні цілі' }}
      />
    </Stack.Navigator>
  );
}
