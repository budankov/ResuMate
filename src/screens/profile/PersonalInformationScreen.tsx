import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import FormLayout from '../../components/forms/FormLayout';
import AppTextInputController from '../../components/inputs/AppTextInputController';
import { useFormHandler } from '../../hooks/useFormHandler';
import { savePersonalInfo } from '../../store/slices/profileSlice';
import { RootState } from '../../store/store';
import { colors } from '../../styles/colors';

const schema = yup.object({
  name: yup.string().required('Це поле обовʼязкове до заповнення'),
  surname: yup.string().required('Це поле обовʼязкове до заповнення'),
  email: yup.string().email('Невірний формат email'),
  phone: yup.string(),
  website: yup.string(),
  address: yup.string(),
  zipCode: yup.string(),
  city: yup.string(),
  region: yup.string(),
  country: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

const PersonalInformationScreen = () => {
  const dispatch = useDispatch();
  const savedData = useSelector(
    (state: RootState) => state.profile.personalInfo,
  );

  const defaultValues: FormData = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    zipCode: '',
    city: '',
    region: '',
    country: '',
    ...savedData,
  };

  const { control } = useFormHandler<FormData>({
    schema,
    defaultValues,
    onSave: data => dispatch(savePersonalInfo(data)),
  });

  return (
    <FormLayout>
      <AppTextInputController
        control={control}
        name="name"
        placeholder="Імʼя"
      />
      <AppTextInputController
        control={control}
        name="surname"
        placeholder="Прізвище"
      />
      <Text style={styles.title}>Контактна інформація</Text>
      <AppTextInputController
        control={control}
        name="email"
        placeholder="Електронна пошта"
      />
      <AppTextInputController
        control={control}
        name="phone"
        placeholder="Телефон"
      />
      <AppTextInputController
        control={control}
        name="website"
        placeholder="Веб-сторінка"
      />
      <Text style={styles.title}>Місцезнаходження</Text>
      <AppTextInputController
        control={control}
        name="address"
        placeholder="Адреса"
      />
      <AppTextInputController
        control={control}
        name="zipCode"
        placeholder="Поштовий індекс"
      />
      <AppTextInputController
        control={control}
        name="city"
        placeholder="Місто"
      />
      <AppTextInputController
        control={control}
        name="region"
        placeholder="Область"
      />
      <AppTextInputController
        control={control}
        name="country"
        placeholder="Країна"
      />
    </FormLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: s(16),
    color: colors.fonts,
    paddingVertical: vs(10),
    fontWeight: '700',
  },
});

export default PersonalInformationScreen;
