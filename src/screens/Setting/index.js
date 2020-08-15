import React, { useMemo, useState } from "react";
import { ScrollView, SafeAreaView, View, Button } from "react-native";
import { Text } from "../../components/Themed";
import styles from "./styles";
import controls from "../../../assets/data/controls.json";
import Input from "../../components/Input";
import Picker from "../../components/Picker";
import MultiPicker from "../../components/MultiPicker";

export default function SettingScreen() {
  const formInput = useMemo(() => controls.controls, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.container}>
          {formInput.map((props, index) =>
            props.type === "input" ? (
              <Input {...props} keyProp={index} />
            ) : props.multiple ? (
              <MultiPicker {...props} keyProp={index} />
            ) : (
              <Picker {...props} keyProp={index} />
            )
          )}

          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => alert("Button with adjusted color pressed")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
