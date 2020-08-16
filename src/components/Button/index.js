import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import styles from "./styles";

export default function Button({ onPress, text = "Kaydet" }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
