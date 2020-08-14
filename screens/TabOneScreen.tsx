import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function TabOneScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.border} lightColor="#709C75" darkColor="#FABAB5" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  border: {
    flex: 1,
    height: "50%",
    width: "90%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});
