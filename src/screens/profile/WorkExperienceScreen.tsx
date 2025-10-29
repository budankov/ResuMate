import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import FormLayout from '../../components/forms/FormLayout';
import AppDatePickerController from '../../components/inputs/AppDatePickerController';
import AppTextInputController from '../../components/inputs/AppTextInputController';
import { useFormHandler } from '../../hooks/useFormHandler';
import { saveWorkExperience } from '../../store/slices/profileSlice';
import { RootState } from '../../store/store';
import { colors } from '../../styles/colors';

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

const WorkExperienceScreen = () => {
  const [date, setDate] = useState(new Date());
  console.log('дата', date);
  const [open, setOpen] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const dispatch = useDispatch();
  const savedData = useSelector(
    (state: RootState) => state.profile.workExperience,
  );

  const defaultValues: FormData = {
    position: '',
    company: '',
    location: '',
    website: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
    ...savedData,
  };

  const { control } = useFormHandler<FormData>({
    schema,
    defaultValues,
    onSave: data => dispatch(saveWorkExperience(data)),
  });

  return (
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
          trackColor={{ false: '#767577', true: '#767577' }}
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

export default WorkExperienceScreen;
