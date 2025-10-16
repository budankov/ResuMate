import React, { FC, useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

interface IKeyboardAvoidingViewContainer {
  children: React.ReactNode;
}

const KeyboardAvoidingViewContainer: FC<IKeyboardAvoidingViewContainer> = ({
  children,
}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setEnabled(false);
    });

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setEnabled(true);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.key}
      enabled={!enabled}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  key: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default KeyboardAvoidingViewContainer;
