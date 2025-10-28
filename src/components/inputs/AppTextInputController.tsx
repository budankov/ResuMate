import { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../../styles/colors';
import AppTextInput from './AppTextInput';

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  showPassword?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  styleInput?: object[];
}

const AppTextInputController = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  styleInput,
  showPassword,
}: AppTextInputControllerProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            showPassword={showPassword}
            style={[
              styleInput,
              isFocused && styles.focusedInput,
              error && styles.errorInput,
            ]}
          />
          {error && <Text style={styles.textError}>{error.message}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  focusedInput: {
    borderColor: colors.yellow,
  },
  errorInput: {
    borderColor: 'red',
  },
  textError: {
    color: 'red',
    fontSize: s(12),
    textAlign: 'center',
    marginTop: -vs(5),
    marginBottom: vs(10),
  },
});

export default AppTextInputController;
