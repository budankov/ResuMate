import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { s, vs } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import FormLayout from '../../components/forms/FormLayout';
import AppDatePickerController from '../../components/inputs/AppDatePickerController';
import AppTextInputController from '../../components/inputs/AppTextInputController';
import { useFormHandler } from '../../hooks/useFormHandler';
import {
  addCard,
  closeEditor,
  updateCard,
} from '../../store/slices/cardsSlice';
import { saveWorkExperience } from '../../store/slices/profileSlice';
import { RootState } from '../../store/store';
import { colors } from '../../styles/colors';
import AddButton from '../buttons/AddButton';

const schema = yup.object({
  position: yup.string().required('Це поле обовʼязкове до заповнення'),
  company: yup.string(),
  location: yup.string(),
  website: yup.string(),
  responsibilities: yup.string(),
  startDate: yup.string(),
  endDate: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

const WorkExperienceForm = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const dispatch = useDispatch();

  const editing = useSelector((state: RootState) => state.cards.editing);
  const experienceList = useSelector(
    (state: RootState) => state.cards.records?.workExperience || [],
  );

  const defaultValues: FormData = {
    position: '',
    company: '',
    location: '',
    website: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  };

  const { control, handleSubmit, onSubmit, reset } = useFormHandler<FormData>({
    schema,
    defaultValues,
    onSave: () => {},
  });

  React.useEffect(() => {
    if (editing && editing.card) {
      reset(editing.card.data as FormData);
    } else {
      reset(defaultValues as FormData);
    }
  }, [editing, reset]);

  const handleConfirm = (data: FormData) => {
    const namespace = 'workExperience';

    const current = experienceList.map((c: any) => c.data);
    let newPayload: any[] = [];

    if (editing && editing.card) {
      newPayload = current.map((d: any, idx: number) =>
        experienceList[idx].id === editing.card!.id ? data : d,
      );
      dispatch(updateCard({ namespace, id: editing.card.id, data }));
    } else {
      newPayload = [...current, data];
      dispatch(addCard({ namespace, card: { data } }));
    }

    // Persist updated list into profile slice
    dispatch(saveWorkExperience(newPayload));

    dispatch(closeEditor());
    SheetManager.hide('WORK_EXPERIENCE_SHEET');
  };
  const insets = useSafeAreaInsets();

  return (
    <ActionSheet
      id="WORK_EXPERIENCE_SHEET"
      gestureEnabled
      safeAreaInsets={insets}
      drawUnderStatusBar
      indicatorStyle={{
        width: 150,
      }}
      containerStyle={{
        height: '100%',
        backgroundColor: colors.primary,
      }}
    >
      <View style={{ height: '100%' }}>
        <FormLayout>
          <AppTextInputController
            control={control}
            name="position"
            placeholder="Посада"
          />
          <AppTextInputController
            control={control}
            name="company"
            placeholder="Назва компанії"
          />
          <AppTextInputController
            control={control}
            name="location"
            placeholder="Місце знаходження"
          />
          <AppTextInputController
            control={control}
            name="website"
            placeholder="Веб-сторінка"
          />
          <AppTextInputController
            control={control}
            name="responsibilities"
            placeholder="Обовязки"
            multiline
            scrollEnabled
            styleInput={[{ height: vs(150) }]}
          />

          <AppDatePickerController
            control={control}
            name="startDate"
            placeholder="Дата працевлаштування"
          />

          <View style={styles.switchContainer}>
            <Text style={styles.switchTitle}>Це ваша поточна посада?</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#3e3e3e' }}
              thumbColor={isEnabled ? colors.yellow : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          {!isEnabled && (
            <AppDatePickerController
              control={control}
              name="endDate"
              placeholder="Дата звільнення"
            />
          )}
        </FormLayout>
        <View style={{ paddingHorizontal: s(10) }}>
          <AddButton
            onPress={handleSubmit(handleConfirm)}
            title="Додати досвід"
          />
        </View>
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: vs(5),
  },
  switchTitle: {
    color: colors.fonts,
    fontSize: s(14),
  },
});

export default WorkExperienceForm;
