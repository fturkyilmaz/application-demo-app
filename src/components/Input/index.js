import React, { useState } from "react";
import { TextInput } from "react-native";
import { View } from "../Themed";
import { useThemeColor, Text } from "../../components/Themed";
import styles from "./styles";

export default function Input({
  caption = "Mail",
  disabled = true,
  autoCapitalize = "none",
  onChangeText,
  maxLength,
  placeholder = "Mail giriniz.",
  value = "",
  keyboardType = "email-address",
}) {
  const placeholderColor = useThemeColor({ colorName: "placeholder" });
  console.log("value",value)

  return (
    <View>
      {caption && <Text style={styles.labelStyle}>{caption}</Text>}

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
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />
    </View>
  );
}
