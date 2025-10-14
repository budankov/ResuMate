import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/header/CustomHeader';
import ProfileScreen from '../screens/main/ProfileScreen';
import PersonalInformationScreen from '../screens/profile/PersonalInformationScreen';
import ProfessionalGoalsScreen from '../screens/profile/ProfessionalGoalsScreen';

const Stack = createNativeStackNavigator();
const renderHeader = (props: any) => <CustomHeader {...props} />;

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        header: renderHeader,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="PersonalInformationScreen"
        component={PersonalInformationScreen}
      />
      <Stack.Screen
        name="ProfessionalGoalsScreen"
        component={ProfessionalGoalsScreen}
      />
    </Stack.Navigator>
  );
}
