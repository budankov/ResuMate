import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon';
import { colors } from '../../styles/colors';

interface ProfileButtonProps extends PressableProps {
  title: string;
  children: React.ReactElement<{ size?: number; color?: string }>;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
  onPress,
  title,
  children,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btn,
        pressed && { borderColor: colors.yellow },
      ]}
    >
      {({ pressed }) => {
        const iconWithProps = React.cloneElement(children, {
          size: 24,
          color: pressed ? colors.yellow : colors.fonts,
        });

        return (
          <>
            <View style={styles.titleWrapper}>
              <View
                style={[
                  styles.iconWrapper,
                  pressed && { borderColor: colors.yellow },
                ]}
              >
                {iconWithProps}
              </View>
              <Text style={styles.text}>{title}</Text>
            </View>
            <ChevronRightIcon size={24} color={colors.fonts} />
          </>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingVertical: vs(6),
    paddingHorizontal: s(15),
    borderRadius: 16,
    gap: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    marginVertical: vs(2),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
  text: {
    color: colors.fonts,
    fontSize: s(16),
  },
});

export default ProfileButton;
