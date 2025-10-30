import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { s } from 'react-native-size-matters';
import EditIcon from '../../assets/icons/EditIcon';
import AddButton from '../../components/buttons/AddButton';
import CardItem from '../../components/card/CardItem';
import { colors } from '../../styles/colors';

const experienceList = [
  {
    id: 1,
    position: 'React Native',
    company: 'Google',
    startDate: '22.10.2005',
    endDate: '22.10.2015',
  },
  {
    id: 2,
    position: 'FrontEnd Developer',
    company: 'Facebook',
    startDate: '11.10.2010',
    endDate: '13.12.2019',
  },
  {
    id: 3,
    position: 'BackEnd Developer',
    company: 'Amazon',
    startDate: '15.11.2015',
    endDate: '',
  },
];

const WorkExperienceScreen = () => {
  const editCard = () => {
    console.log('editCard');
  };

  const deleteCard = () => {
    console.log('deleteCard');
  };

  const addExperience = () => {
    console.log('addExperience');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={experienceList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardItem
            title={item.position}
            subTitle={item.company}
            startDate={item.startDate}
            endDate={item.endDate}
            editCard={editCard}
            deleteCard={deleteCard}
          />
        )}
      />
      <AddButton
        title="Додати досвід"
        onPress={addExperience}
        children={<EditIcon />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: s(10),
  },
});

export default WorkExperienceScreen;
