import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

export const Icons = {
  profile: (props) => <AntDesign name="user" {...props} />,
  home: (props) => <AntDesign name="home" {...props} />,
  settings: (props) => <Feather name="settings" {...props} />,
  work: (props) => <MaterialIcons name="work" {...props} />,
  education: (props) => <MaterialIcons name="school" {...props} />,
  skills: (props) => <Feather name="tool" {...props} />,
  language: (props) => <Feather name="globe" {...props} />,
  hobby: (props) => <Feather name="heart" {...props} />,
  certificate: (props) => <MaterialIcons name="workspace-premium" {...props} />,
  website: (props) => <Feather name="link" {...props} />,
};