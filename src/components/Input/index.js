import React, { useState } from "react";
import { TextInput } from "react-native";
import { View } from "../Themed";
import Colors from "../../constants/Colors";
import { useThemeColor, Text } from "../../components/Themed";
import styles from "./styles";

export default function Input({
  label = "Mail",
  numeric = false,
  disabled = true,
  autoCapitalize = "none",
  onChangeText,
  maxLength,
  placeholder,
  value = "DENEME",
  keyboardType = "email-address",
}) {
  const placeholderColor = useThemeColor({ colorName: "placeholder" });

  return (
    <View>
      {label && <Text style={styles.labelStyle}>{label}</Text>}

      <TextInput
        placeholder={placeholder}
        editable={disabled}
        placeholderTextColor={placeholderColor}
        autoCorrect={false}
        style={styles.inputStyle}
        selectTextOnFocus={disabled}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        numeric={numeric}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />
    </View>
  );
}
