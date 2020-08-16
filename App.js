import React, { useEffect } from "react";
import Navigation from "./src/navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  useEffect(() => {
    Icon.loadFont();
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
