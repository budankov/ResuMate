import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppTextInput from '../../components/inputs/AppTextInput';
import KeyboardAvoidingViewContainer from '../../components/KeyboardAvoidingViewContainer/KeyboardAvoidingViewContainer';
import { colors } from '../../styles/colors';

const PersonalInformationScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <KeyboardAvoidingViewContainer>
      <ScrollView
        style={{ backgroundColor: colors.primary }}
        contentContainerStyle={styles.container}
      >
        <AppTextInput placeholder="Імʼя" value={name} onChangeText={setName} />
        <AppTextInput
          placeholder="Прізвище"
          value={surname}
          onChangeText={setSurname}
        />
        <Text style={styles.title}>Контактна інформація</Text>
        <AppTextInput
          placeholder="Електронна пошта"
          value={surname}
          onChangeText={setSurname}
        />
        <AppTextInput
          placeholder="Телефон"
          value={surname}
          onChangeText={setSurname}
        />
        <AppTextInput
          placeholder="Веб-сторінка"
          value={surname}
          onChangeText={setSurname}
        />
        <Text style={styles.title}>Місцезнаходження</Text>
        <AppTextInput
          placeholder="Адреса"
          value={surname}
          onChangeText={setSurname}
        />
        <AppTextInput
          placeholder="Поштовий індекс"
          value={surname}
          onChangeText={setSurname}
        />
        <AppTextInput
          placeholder="Місто"
          value={surname}
          onChangeText={setSurname}
        />
        <AppTextInput
          placeholder="Область"
          value={surname}
          onChangeText={setSurname}
        />
        <AppTextInput
          placeholder="Країна"
          value={surname}
          onChangeText={setSurname}
        />
      </ScrollView>
    </KeyboardAvoidingViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'flex-start',
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
