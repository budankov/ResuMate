import React, { FC, useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';
import { IS_ANDROID } from '../../constants/constants';
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
      keyboardVerticalOffset={IS_ANDROID ? s(60) : s(55)}
      style={styles.key}
      enabled={IS_ANDROID ? !enabled : true}
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
