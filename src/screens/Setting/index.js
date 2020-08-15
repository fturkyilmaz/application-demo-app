import * as React from "react";
import { ScrollView } from "react-native";
import { View } from "../../components/Themed";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import controls from "../../../assets/data/controls.json";
import Input from "../../components/Input";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.container}>
          <Input />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
