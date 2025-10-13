import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import UserIcon from '../../assets/icons/UserIcon';
import { colors } from '../../styles/colors';

const GlassButton = () => {
  return (
    <Pressable style={styles.btn}>
      <UserIcon width={32} height={32} />
      <Text style={styles.text}>Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // для Android
  },
  text: {
    color: colors.fonts,
    fontSize: 18,
  },
});

export default GlassButton;
