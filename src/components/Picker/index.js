import React, { useState } from "react";
import { Picker } from "@react-native-community/picker";
import { View, Text } from "../Themed";
import styles from "./styles";

export default function SelectPicker({ items = {}, caption }) {
  const [selectedValue, setSelectedValue] = useState(null);

  return Object.keys(items).length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.caption}>{caption}</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.pickerContainer}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        itemStyle={styles.pickerItem}
      >
        {Object.entries(items).map(([key, value]) => (
          <Picker.Item label={value} value={key} key={key} />
        ))}
      </Picker>
    </View>
  ) : null;
}
