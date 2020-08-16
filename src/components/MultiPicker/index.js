import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import styles from "./styles";
import PickerItem from "./PickerItem";

export default function MultiPicker({ items = {}, caption, value = [] }) {
  const data = useMemo(
    () =>
      Object.entries(items).map(([key, value]) => ({
        label: value,
        value: key,
      })),
    []
  );

  const [selectedValues, setSelectedValues] = useState(value);

  function onSelectionsChange(selectedFilter) {
    setSelectedValues(selectedFilter);
  }

  return (
    <View>
      <Text style={styles.caption}>{caption}</Text>
      <SelectMultiple
        items={data}
        renderLabel={PickerItem}
        selectedItems={selectedValues}
        onSelectionsChange={onSelectionsChange}
      />
    </View>
  );
}