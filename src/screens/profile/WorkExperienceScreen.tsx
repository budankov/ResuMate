import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { s } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '../../assets/icons/EditIcon';
import AddButton from '../../components/buttons/AddButton';
import CardItem from '../../components/card/CardItem';
import WorkExperienceForm from '../../components/forms/WorkExperienceForm';
import {
  openEditor,
  removeCard,
  setCards,
} from '../../store/slices/cardsSlice';
import { saveWorkExperience } from '../../store/slices/profileSlice';
import { RootState } from '../../store/store';
import { colors } from '../../styles/colors';

const WorkExperienceScreen = () => {
  const dispatch = useDispatch();

  const experienceList = useSelector(
    (state: RootState) => state.cards.records?.workExperience || [],
  );
  const profile = useSelector((state: RootState) => state.profile);

  const editCard = (card: any) => {
    dispatch(openEditor({ namespace: 'workExperience', card }));
    SheetManager.show('WORK_EXPERIENCE_SHEET');
  };

  const deleteCardHandler = (id: string) => {
    const newPayload = experienceList
      .filter((c: any) => c.id !== id)
      .map((c: any) => c.data);
    dispatch(removeCard({ namespace: 'workExperience', id }));
    dispatch(saveWorkExperience(newPayload));
  };

  const addExperience = () => {
    dispatch(openEditor({ namespace: 'workExperience', card: null }));
    SheetManager.show('WORK_EXPERIENCE_SHEET');
  };

  React.useEffect(() => {
    if (
      (experienceList || []).length === 0 &&
      (profile?.workExperience || []).length > 0
    ) {
      const mapped = (profile.workExperience || []).map(item => ({
        id: nanoid(),
        data: item,
      }));
      dispatch(setCards({ namespace: 'workExperience', cards: mapped }));
    }
  }, [dispatch, experienceList, profile?.workExperience]);

  return (
    <View style={styles.container}>
      <FlatList
        data={experienceList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardItem
            title={item.data.position}
            subTitle={item.data.company}
            startDate={item.data.startDate}
            endDate={item.data.endDate}
            editCard={() => editCard(item)}
            deleteCard={() => deleteCardHandler(item.id)}
          />
        )}
      />
      <AddButton
        title="Додати досвід"
        onPress={addExperience}
        children={<EditIcon />}
      />
      <WorkExperienceForm />
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
