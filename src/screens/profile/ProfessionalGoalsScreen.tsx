import React from 'react';
import { vs } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import FormLayout from '../../components/forms/FormLayout';
import AppTextInputController from '../../components/inputs/AppTextInputController';
import { useFormHandler } from '../../hooks/useFormHandler';
import { saveProfessionalGoals } from '../../store/slices/profileSlice';
import { RootState } from '../../store/store';

const schema = yup.object({
  position: yup.string().required('Це поле обовʼязкове до заповнення'),
  summary: yup.string().required('Це поле обовʼязкове до заповнення'),
});

type FormData = yup.InferType<typeof schema>;

const ProfessionalGoalsScreen = () => {
  const dispatch = useDispatch();
  const savedData = useSelector(
    (state: RootState) => state.profile.professionalGoals,
  );

  const defaultValues: FormData = {
    position: '',
    summary: '',
    ...savedData,
  };

  const { control } = useFormHandler<FormData>({
    schema,
    defaultValues,
    onSave: data => dispatch(saveProfessionalGoals(data)),
  });

  return (
    <FormLayout>
      <AppTextInputController
        control={control}
        name="position"
        placeholder="Позиція"
      />
      <AppTextInputController
        control={control}
        name="summary"
        placeholder="Короткий зміст про себе"
        multiline
        scrollEnabled
        styleInput={[{ height: vs(350) }]}
      />
    </FormLayout>
  );
};

export default ProfessionalGoalsScreen;
