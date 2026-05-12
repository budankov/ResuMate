import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeader from "../components/header/CustomHeader";
import ProfileScreen from "../screens/main/ProfileScreen";
import CertificatesScreen from "../screens/profile/CertificatesScreen";
import EducationScreen from "../screens/profile/EducationScreen";
import HobbyScreen from "../screens/profile/HobbyScreen";
import LanguagesScreen from "../screens/profile/LanguagesScreen";
import PersonalInformationScreen from "../screens/profile/PersonalInformationScreen";
import ProfessionalGoalsScreen from "../screens/profile/ProfessionalGoalsScreen";
import SkillsScreen from "../screens/profile/SkillsScreen";
import WebsiteScreen from "../screens/profile/WebsiteScreen";
import WorkExperienceScreen from "../screens/profile/WorkExperienceScreen";

const Stack = createNativeStackNavigator();
const renderHeader = (props: any) => <CustomHeader {...props} />;

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{}}>
      <Stack.Screen name="Профіль користувача" component={ProfileScreen} />
      <Stack.Screen
        name="PersonalInformationScreen"
        component={PersonalInformationScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="ProfessionalGoalsScreen"
        component={ProfessionalGoalsScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="WorkExperienceScreen"
        component={WorkExperienceScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="EducationScreen"
        component={EducationScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="SkillsScreen"
        component={SkillsScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="LanguagesScreen"
        component={LanguagesScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="HobbyScreen"
        component={HobbyScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="CertificatesScreen"
        component={CertificatesScreen}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name="WebsiteScreen"
        component={WebsiteScreen}
        options={{ header: renderHeader }}
      />
    </Stack.Navigator>
  );
}
