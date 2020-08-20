import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles'

export default function TabBarIcon(props) {
  return <Ionicons size={30} style={styles.container} {...props} />;
}
