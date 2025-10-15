import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/header/CustomHeader';
import ProfileScreen from '../screens/main/ProfileScreen';
import EducationScreen from '../screens/profile/EducationScreen';
import PersonalInformationScreen from '../screens/profile/PersonalInformationScreen';
import ProfessionalGoalsScreen from '../screens/profile/ProfessionalGoalsScreen';
import WorkExperienceScreen from '../screens/profile/WorkExperienceScreen';
import SkillsScreen from '../screens/profile/SkillsScreen';

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
      <Stack.Screen
        name="WorkExperienceScreen"
        component={WorkExperienceScreen}
      />
      <Stack.Screen name="EducationScreen" component={EducationScreen} />
      <Stack.Screen name="SkillsScreen" component={SkillsScreen} />
    </Stack.Navigator>
  );
}
