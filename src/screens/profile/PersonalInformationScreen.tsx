import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';
// import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import AppTextInputController from '../../components/inputs/AppTextInputController';
import KeyboardAvoidingViewContainer from '../../components/KeyboardAvoidingViewContainer/KeyboardAvoidingViewContainer';
import { colors } from '../../styles/colors';

const PersonalInformationScreen = () => {
  // const dispatch = useDispatch();

  const schema = yup
    .object({
      name: yup.string().required('Це поле обовʼязкове до заповнення'),
      surname: yup.string().required('Це поле обовʼязкове до заповнення'),
      email: yup.string().email('Невірний формат email'),
      phone: yup.string(),
      website: yup.string().url(),
      address: yup.string(),
      zipCode: yup.string(),
      city: yup.string(),
      region: yup.string(),
      country: yup.string(),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
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
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
  };

  return (
    <KeyboardAvoidingViewContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <AppTextInputController<FormData>
          control={control}
          name="name"
          placeholder="Імʼя"
        />
        <AppTextInputController<FormData>
          control={control}
          name="surname"
          placeholder="Прізвище"
        />
        <Text style={styles.title}>Контактна інформація</Text>
        <AppTextInputController<FormData>
          control={control}
          name="email"
          placeholder="Електронна пошта"
        />
        <AppTextInputController<FormData>
          control={control}
          name="phone"
          placeholder="Телефон"
        />
        <AppTextInputController<FormData>
          control={control}
          name="website"
          placeholder="Веб-сторінка"
        />
        <Text style={styles.title}>Місцезнаходження</Text>
        <AppTextInputController<FormData>
          control={control}
          name="address"
          placeholder="Адреса"
        />
        <AppTextInputController<FormData>
          control={control}
          name="zipCode"
          placeholder="Поштовий індекс"
        />
        <AppTextInputController<FormData>
          control={control}
          name="city"
          placeholder="Місто"
        />
        <AppTextInputController<FormData>
          control={control}
          name="region"
          placeholder="Область"
        />
        <AppTextInputController<FormData>
          control={control}
          name="country"
          placeholder="Країна"
        />
        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingViewContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.primary,
    paddingHorizontal: s(10),
    paddingVertical: vs(20),
  },
  title: {
    fontSize: s(16),
    color: colors.fonts,
    paddingVertical: vs(10),
    fontWeight: '700',
  },
});

export default PersonalInformationScreen;
