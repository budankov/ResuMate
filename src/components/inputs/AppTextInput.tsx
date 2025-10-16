import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../../styles/colors';

interface AppTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  style?: object | object[];
  placeholderTextColor?: string;
  showPassword?: boolean;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
  placeholderTextColor,
  showPassword = false,
}) => {
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || 'gray'}
        secureTextEntry={showPassword ? isHidden : secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, style]}
      />
      {showPassword && (
        <Pressable
          style={styles.icon}
          onPress={() => setIsHidden(prev => !prev)}
        >
          {/* <Ionicons
            name={isHidden ? "eye-off-outline" : "eye-outline"}
            size={26}
            color="#000"
          /> */}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    color: colors.fonts,
    height: vs(40),
    backgroundColor: colors.primary,
    paddingVertical: vs(4),
    paddingHorizontal: s(15),
    borderRadius: s(16),
    gap: s(12),
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    marginVertical: vs(4),
    // borderRadius: s(25),
    // borderWidth: 1,
    // borderColor: '#000',
    // paddingHorizontal: s(15),
    // fontSize: s(16),
    // backgroundColor: '#fff',
    // width: '100%',
    // marginBottom: vs(10),
    // paddingRight: s(40),
  },
  icon: {
    position: 'absolute',
    right: s(10),
    top: '50%',
    transform: [{ translateY: -11 }],
  },
});

export default AppTextInput;
