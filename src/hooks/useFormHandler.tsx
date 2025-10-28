import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Pressable, StyleSheet, Text } from 'react-native';
import { s } from 'react-native-size-matters';
import { colors } from '../styles/colors';

export function useFormHandler<FormType>({
  schema,
  defaultValues,
  onSave,
}: {
  schema: any;
  defaultValues: FormType;
  onSave: (data: FormType) => void;
}) {
  const navigation = useNavigation<any>();

  const { control, handleSubmit, formState, reset } = useForm<FormType>({
    resolver: yupResolver(schema) as any,
    defaultValues,
    shouldUnregister: false,
  });

  const onSubmit = useCallback(
    (data: FormType) => {
      Keyboard.dismiss();
      const cleanedData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          typeof value === 'string' ? value.trim() || '' : value,
        ]),
      ) as FormType;

      onSave(cleanedData);
      console.log(cleanedData);

      Alert.alert('Ваші дані збережено', '', [
        {
          text: 'OK',
          onPress: () => reset(cleanedData),
        },
      ]);
    },
    [onSave, reset],
  );

  const { isDirty } = formState;

  useEffect(() => {
    navigation.setParams({ isDirty });
  }, [isDirty]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: isDirty
        ? () => (
            <Pressable onPress={handleSubmit(onSubmit)}>
              <Text style={styles.text}>Зберегти</Text>
            </Pressable>
          )
        : undefined,
    });
  }, [navigation, handleSubmit, onSubmit, isDirty]);

  const styles = StyleSheet.create({
    text: {
      fontSize: s(13),
      color: colors.yellow,
      fontWeight: '700',
    },
  });

  return { control, handleSubmit, onSubmit, isDirty };
}
