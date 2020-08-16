import React from "react";
import { Alert } from "react-native";
import { View } from "../../components/Themed";
import styles from "./styles";
import SeturWebView from "../../components/SeturWebView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNetInfo } from "@react-native-community/netinfo";

export default function HomeScreen({}) {
  const insets = useSafeAreaInsets();
  const netInfo = useNetInfo();

  React.useEffect(() => {
    if (!netInfo.isConnected && netInfo.details !== null) {
      Alert.alert("Error Connection", "Open Wifi and mobile data.");
    }
  }, [netInfo]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Math.max(insets.top, 16),
        },
      ]}
    >
      <SeturWebView />
    </View>
  );
}
