import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../../styles/colors';
import KeyboardAvoidingViewContainer from '../KeyboardAvoidingViewContainer/KeyboardAvoidingViewContainer';

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <KeyboardAvoidingViewContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {children}
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
});

export default FormLayout;
