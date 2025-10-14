import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

type CustomHeaderProps = {
  navigation: any;
  route: any;
  back?: any;
};

const titles: Record<string, string> = {
  PersonalInformationScreen: 'Персональна інформація',
  ProfessionalGoalsScreen: 'Професійні цілі',
};

const CustomHeader: FC<CustomHeaderProps> = ({ navigation, route, back }) => {
  if (route.name === 'ProfileScreen') return null;

  const title = titles[route.name] || route.name;

  return (
    <View style={styles.header}>
      {back && (
        <Pressable onPress={navigation.goBack}>
          <Text style={styles.back}>{'<'} Назад</Text>
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  back: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
  },
});

export default CustomHeader;
