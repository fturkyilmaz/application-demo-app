import React, { useMemo } from "react";
import { Alert } from "react-native";
import { View } from "../../components/Themed";
import styles from "./styles";
import SeturWebView from "../../components/SeturWebView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNetInfo } from "@react-native-community/netinfo";
import distances from "../../constants/Distances";

export default function HomeScreen({}) {
  const insets = useSafeAreaInsets();
  const netInfo = useNetInfo();

  const containerStyle = useMemo(
    () => ({
      ...styles.container,
      paddingTop: Math.max(insets.top, distances.defaultDistance),
    }),
    []
  );

  React.useEffect(() => {
    if (!netInfo.isConnected && netInfo.details !== null) {
      Alert.alert("Error Connection", "Open Wifi or mobile data.");
    }
  }, [netInfo]);

  return (
    <View style={containerStyle}>
      <SeturWebView />
    </View>
  );
}
