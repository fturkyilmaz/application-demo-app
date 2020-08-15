import React, { useEffect } from "react";
import Navigation from "./src/navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { NotifierWrapper } from "react-native-notifier";

export default function App() {
  useEffect(() => {
    Icon.loadFont();
  }, []);
  return (
    // <NotifierWrapper>
    <Navigation />
    // </NotifierWrapper>
  );
}
