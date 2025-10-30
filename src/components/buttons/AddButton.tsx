import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AddIcon from '../../assets/icons/AddIcon';
import { colors } from '../../styles/colors';

interface AddButtonProps extends PressableProps {
  title: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btn,
        pressed && { borderColor: colors.yellow },
      ]}
    >
      <AddIcon size={s(24)} color={colors.fonts} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: vs(40),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: vs(4),
    paddingHorizontal: s(15),
    borderRadius: s(16),
    gap: s(12),
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    marginVertical: vs(2),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(12),
  },
  text: {
    color: colors.fonts,
    fontSize: s(16),
  },
});

export default AddButton;
