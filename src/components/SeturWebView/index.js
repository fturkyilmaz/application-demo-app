import React from "react";
import { ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { View } from "../Themed";
import styles from "./styles";
import Colors from "../../constants/Colors";

export default function WebViewScreen({ uri = "https://www.setur.com.tr" }) {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{ uri }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={() => (
          <ActivityIndicator
            color={Colors.global.webViewLoader}
            size="large"
            style={styles.activityIndicator}
          />
        )}
        startInLoadingState={true}
      />
     </View>
  );
}
