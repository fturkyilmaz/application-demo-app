import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function TabOneScreen({}) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Third</Text>
      <View style={styles.border} lightColor="#709C75" darkColor="#FABAB5" /> */}
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: 400 }}
          source={{
            uri:
              "https://static.plugger.com.tr/cdn-cgi/image/width=960,height=540,fit=scale-down/https://static.plugger.com.tr/Content/etkinlik/unesco-dunya-mirasi-yolunda-bisiklet-turu-selcuk-bench-events--fea4273f-038a-444c-b20f-c3b9cbc4ab4d.jpeg",
            cache: "force-cache",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
