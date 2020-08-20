import React from "react";
import { View, Text } from "react-native";

export default function PicketItem(label, style) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ marginLeft: 10 }}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  );
}
