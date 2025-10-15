import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/header/CustomHeader';
import ProfileScreen from '../screens/main/ProfileScreen';
import CertificatesScreen from '../screens/profile/CertificatesScreen';
import EducationScreen from '../screens/profile/EducationScreen';
import HobbyScreen from '../screens/profile/HobbyScreen';
import LanguagesScreen from '../screens/profile/LanguagesScreen';
import PersonalInformationScreen from '../screens/profile/PersonalInformationScreen';
import ProfessionalGoalsScreen from '../screens/profile/ProfessionalGoalsScreen';
import SkillsScreen from '../screens/profile/SkillsScreen';
import WebsiteScreen from '../screens/profile/WebsiteScreen';
import WorkExperienceScreen from '../screens/profile/WorkExperienceScreen';

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
      <Stack.Screen name="LanguagesScreen" component={LanguagesScreen} />
      <Stack.Screen name="HobbyScreen" component={HobbyScreen} />
      <Stack.Screen name="CertificatesScreen" component={CertificatesScreen} />
      <Stack.Screen name="WebsiteScreen" component={WebsiteScreen} />
    </Stack.Navigator>
  );
}
