import React, { useState, useEffect } from "react";
import SplashScreen from "react-native-bootsplash";
import Icon from "react-native-vector-icons/Ionicons";
import { SETTING_COLLECTION } from "../constants/Firebase";
import database from "@react-native-firebase/database";
import { useDispatch } from "react-redux";
import { addSetting } from "../redux/actions/settingActions";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const dispatch = useDispatch();

  function getSetting() {
    database()
      .ref(SETTING_COLLECTION)
      .on("value", (snapshot) => {
        const item = snapshot.val() || { language: "", email: "", filter: [] };
        dispatch(addSetting(item));
      });
  }

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        getSetting();
        Icon.loadFont();
        SplashScreen.show({ duration: 2000 });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
