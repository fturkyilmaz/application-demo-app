import * as React from "react";
import { View } from "../../components/Themed";
import styles from "./styles";
import SeturWebView from "../../components/SeturWebView";

export default function HomeScreen({}) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.border} lightColor="#709C75" darkColor="#FABAB5" /> */}
      <SeturWebView />
    </View>
  );
}
