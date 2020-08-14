import React from "react";
import { ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { View } from "../Themed";
import styles from "./styles";

export default function WebViewScreen() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{ uri: "https://www.setur.com.tr" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={() => (
          <View
            styles={{
              flex: 1,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <ActivityIndicator color="#009b88" size="large" />
          </View>
        )}
        startInLoadingState={true}
      />
    </View>
  );
}
