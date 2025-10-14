import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ButtonOverlay from '../../assets/icons/ButtonOverlay';
import UserIcon from '../../assets/icons/UserIcon';
import { colors } from '../../styles/colors';

const GlassButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <View style={styles.iconWrapper}>
        <ButtonOverlay
          width={40}
          height={40}
          style={[styles.svgOverlay, { zIndex: 1 }]}
        />
        <UserIcon
          width={15}
          height={15}
          style={[styles.svgOverlay, { zIndex: 2 }]}
        />
      </View>

      <Text style={styles.text}>Press</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%', // ✅ займає всю ширину батька
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // ✅ не розтягує контент
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    gap: 12, // ✅ відступ між іконкою і текстом
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.subFonts,
  },
  svgOverlay: {
    position: 'absolute',
  },
  text: {
    color: colors.fonts,
    fontSize: 24,
    fontWeight: '600',
  },
});

export default GlassButton;
