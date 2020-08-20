import React, {useMemo, useContext, useEffect} from 'react';
import styles from './styles';
import WebView from '../../components/WebView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Alert} from 'react-native';
import distances from '../../constants/Distances';
import {NetworkContext} from '../../context/NetworkContext';
import { View } from '../../components/Themed';

export default function HomeScreen({}) {
  const insets = useSafeAreaInsets();

  const {isConnected} = useContext(NetworkContext);

  const containerStyle = useMemo(
    () => ({
      ...styles.container,
      paddingTop: Math.max(insets.top, distances.defaultDistance),
    }),
    [],
  );

  function showNetworkAlert() {
    Alert.alert('Error Connection', 'Open Wifi and mobile data.');
  }

  useEffect(() => {
    if (!isConnected) {
      showNetworkAlert();
    }
  }, [isConnected]);

  return <View style={containerStyle}>{isConnected && <WebView />}</View>;
}
