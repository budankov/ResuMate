import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useCallback, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Keyboard,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { colors } from "../../styles/colors";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  label?: string;
}

const AppDatePickerController = <T extends FieldValues>({
  control,
  name,
  placeholder,
  label,
}: Props<T>) => {
  const [open, setOpen] = useState(false);

  const formatDate = (val?: string) => {
    if (!val) return "";
    const d = new Date(val);
    if (Number.isNaN(d.getTime())) return String(val);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const parseToDate = (val?: string) => {
    if (!val) return new Date();
    const m = val.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (m)
      return new Date(
        parseInt(m[3], 10),
        parseInt(m[2], 10) - 1,
        parseInt(m[1], 10),
      );
    const d = new Date(val);
    return Number.isNaN(d.getTime()) ? new Date() : d;
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handleOpenPicker = useCallback(() => {
          Keyboard.dismiss();

          setTimeout(() => {
            setOpen(true);
          }, 250);
        }, []);

        const handleDateChange = useCallback(
          (event: any, date: any) => {
            if (event.type === "set" && date) {
              onChange(formatDate(date.toISOString()));
            }
            setTimeout(() => {
              setOpen(false);
            }, 100);
          },
          [onChange],
        );

        return (
          <>
            {label && <Text style={styles.label}>{label}</Text>}
            <Pressable
              style={({ pressed }) => [
                styles.inputContainer,
                { borderColor: colors.border },
                pressed && { borderColor: colors.yellow },
              ]}
              onPress={handleOpenPicker}
            >
              <FontAwesome name="calendar" color={colors.fonts} size={18} />
              <Text style={[styles.text, !value && styles.placeholder]}>
                {value ? formatDate(value as any) : placeholder}
              </Text>
              <Entypo name="chevron-down" color={colors.fonts} size={18} />
            </Pressable>

            <Modal
              visible={open}
              transparent
              animationType="fade"
              onRequestClose={() => setOpen(false)}
              presentationStyle="overFullScreen"
            >
              <View style={styles.modalOverlay}>
                <Pressable
                  style={StyleSheet.absoluteFill}
                  onPress={() => setOpen(false)}
                />
                <View style={styles.pickerContainer}>
                  <DateTimePicker
                    value={parseToDate(value)}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange}
                  />
                </View>
              </View>
            </Modal>

            {error && <Text style={styles.textError}>{error.message}</Text>}
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    color: "purple",
    fontSize: s(14),
    marginBottom: vs(4),
  },
  inputContainer: {
    width: "100%",
    height: vs(40),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: s(16),
    paddingHorizontal: s(12),
    paddingVertical: vs(12),
    marginVertical: vs(4),
  },
  text: {
    flex: 1,
    textAlign: "center",
    color: colors.fonts,
    fontSize: s(14),
  },
  placeholder: {
    color: "gray",
  },
  textError: {
    color: "red",
    fontSize: s(12),
    textAlign: "center",
    marginTop: -vs(5),
    marginBottom: vs(10),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  pickerContainer: {
    backgroundColor: "white",
    borderRadius: s(20),
    padding: s(10),
  },
});

export default AppDatePickerController;
