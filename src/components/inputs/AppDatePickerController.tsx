// components/inputs/AppDatePickerController.tsx
import React, { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Pressable, StyleSheet, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { s, vs } from 'react-native-size-matters';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon';
import { colors } from '../../styles/colors';

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  label?: string;
}

const AppDatePickerController = <T extends FieldValues>({
  control,
  name,
  placeholder,
  label,
}: Props<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          {label && <Text style={styles.label}>{label}</Text>}
          <Pressable
            style={({ pressed }) => [
              styles.inputContainer,
              pressed && { borderColor: colors.yellow },
            ]}
            onPress={() => setOpen(true)}
          >
            <CalendarIcon color={colors.fonts} size={20} />
            <Text style={[styles.text, !value && styles.placeholder]}>
              {value
                ? new Date(value).toLocaleDateString('uk-UA')
                : placeholder}
            </Text>
            <ChevronDownIcon color={colors.fonts} size={18} />
          </Pressable>

          <DatePicker
            modal
            open={open}
            date={value ? new Date(value) : new Date()}
            mode="date"
            locale="uk"
            title="Виберіть дату"
            confirmText="Підтвердити"
            cancelText="Скасувати"
            onConfirm={date => {
              setOpen(false);
              onChange(date.toISOString());
            }}
            onCancel={() => setOpen(false)}
          />
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'purple',
    fontSize: s(14),
    marginBottom: vs(4),
  },
  inputContainer: {
    height: vs(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderColor: 'rgba(255,255,255,0.25)',
    borderWidth: 2,
    borderRadius: s(16),
    paddingHorizontal: s(12),
    paddingVertical: vs(12),
    marginVertical: vs(4),
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: colors.fonts,
    fontSize: s(14),
  },
  placeholder: {
    color: 'gray',
  },
});

export default AppDatePickerController;
