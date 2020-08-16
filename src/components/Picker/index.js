import React, { useState } from "react";
import { Picker } from "@react-native-community/picker";
import { View, Text } from "../Themed";
import styles from "./styles";

export default function SelectPicker({
  items = {},
  caption,
  value = null,
  onChange,
}) {
  if (Object.keys(items).length <= 0) return null;

  const selectPicker = Object.entries(items).map(([key, value]) => (
    <Picker.Item label={value} value={key} key={key} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>{caption}</Text>
      <Picker
        selectedValue={value}
        style={styles.pickerContainer}
        onValueChange={(itemValue) => onChange(itemValue)}
        itemStyle={styles.pickerItem}
      >
        {selectPicker}
      </Picker>
    </View>
  );
}
