import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../../styles/colors';

const CardItem = ({
  title,
  subTitle,
  startDate,
  endDate,
  editCard,
  deleteCard,
}) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.infoSection}>
        <Text
          style={styles.titlePosition}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Text
          style={styles.titleCompany}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {subTitle}
        </Text>
        {startDate && (
          <View style={styles.dateContainer}>
            <Text style={styles.titleCompany}>{startDate}</Text>
            <Text style={styles.titleCompany}> - </Text>
            {endDate ? (
              <Text style={styles.titleCompany}>{endDate}</Text>
            ) : (
              <Text style={styles.titleCompany}>Теперішній час</Text>
            )}
          </View>
        )}
      </View>
      <View style={styles.buttonSection}>
        <Pressable onPress={() => editCard()}>
          <AntDesign size={s(24)} color={colors.fonts} />
        </Pressable>
        <Pressable onPress={() => deleteCard()}>
          <MaterialIcons name="delete-outline" size={s(24)} color={colors.fonts} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
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
  titlePosition: {
    fontSize: s(14),
    color: colors.fonts,
  },
  titleCompany: {
    fontSize: s(12),
    color: colors.fonts,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  infoSection: {
    maxWidth: '75%',
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(15),
  },
});

export default CardItem;
