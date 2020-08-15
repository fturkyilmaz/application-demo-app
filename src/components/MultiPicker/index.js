import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import styles from "./styles";

const renderLabel = (label, style) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ marginLeft: 10 }}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  );
};

export default function MultiPicker({ items = {}, caption }) {
  const data = useMemo(
    () =>
      Object.entries(items).map(([key, value]) => ({
        label: value,
        value: key,
      })),
    []
  );

  const [selectedFruits, setSelectedFruits] = useState([]);

  function onSelectionsChange(selectedFruits) {
    setSelectedFruits(selectedFruits);
  }

  return (
    <View>
      <Text style={styles.caption}>{caption}</Text>
      <SelectMultiple
        items={data}
        renderLabel={renderLabel}
        selectedItems={selectedFruits}
        onSelectionsChange={onSelectionsChange}
      />
    </View>
  );
}
