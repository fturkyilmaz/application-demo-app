import React from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {View} from '../Themed';
import styles from './styles';
import Colors from '../../constants/Colors';
import Config from 'react-native-config';

export default function WebViewScreen({uri = Config.BASE_URL}) {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{uri}}
        javaScriptEnabled={true}
        domStorageEnabled={false}
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
