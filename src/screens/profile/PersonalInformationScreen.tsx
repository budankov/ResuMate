import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppTextInput from '../../components/inputs/AppTextInput';
import KeyboardAvoidingViewContainer from '../../components/KeyboardAvoidingViewContainer/KeyboardAvoidingViewContainer';
import { colors } from '../../styles/colors';

const PersonalInformationScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [webpage, setWebpage] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');

  const scrollRef = useRef<ScrollView>(null);

  return (
    <KeyboardAvoidingViewContainer>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.primary,
        }}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
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
          value={email}
          onChangeText={setEmail}
        />
        <AppTextInput
          placeholder="Телефон"
          value={phone}
          onChangeText={setPhone}
        />
        <AppTextInput
          placeholder="Веб-сторінка"
          value={webpage}
          onChangeText={setWebpage}
        />
        <Text style={styles.title}>Місцезнаходження</Text>
        <AppTextInput
          placeholder="Адреса"
          value={address}
          onChangeText={setAddress}
        />
        <AppTextInput
          placeholder="Поштовий індекс"
          value={zipCode}
          onChangeText={setZipCode}
        />
        <AppTextInput placeholder="Місто" value={city} onChangeText={setCity} />
        <AppTextInput
          placeholder="Область"
          value={region}
          onChangeText={setRegion}
        />
        <AppTextInput
          placeholder="Країна"
          value={country}
          onChangeText={setCountry}
        />
      </ScrollView>
    </KeyboardAvoidingViewContainer>
  );
};

const styles = StyleSheet.create({
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
