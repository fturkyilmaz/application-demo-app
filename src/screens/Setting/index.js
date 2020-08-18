import React, { useMemo, useEffect } from "react";
import { ScrollView, SafeAreaView, View, Alert } from "react-native";
import database from "@react-native-firebase/database";
import styles from "./styles";
import controls from "../../../assets/data/controls.json";
import Input from "../../components/Input";
import Picker from "../../components/Picker";
import MultiPicker from "../../components/MultiPicker";
import { useSelector, useDispatch } from "react-redux";
import { addSetting } from "../../redux/actions/settingActions";
import { useForm, Controller } from "react-hook-form";
import { Text } from "../../components/Themed";
import Button from "../../components/Button";
import Distances from "../../constants/Distances";
import { SETTING_COLLECTION } from "../../constants/Firebase";
import { useNetInfo } from "@react-native-community/netinfo";

export default function SettingScreen() {
  const formInput = useMemo(() => controls.controls, []);

  const setting = useSelector((state) => state.setting.setting);

  const dispatch = useDispatch();

  const netInfo = useNetInfo();

  const { control, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (netInfo.isConnected) {
      getSetting();
    }
  }, []);

  useEffect(() => {
    if (!netInfo.isConnected && netInfo.details !== null) {
      Alert.alert("Error Connection", "Open Wifi and mobile data.");
    }
  }, [netInfo]);

  function onSubmit() {
    database()
      .ref(SETTING_COLLECTION)
      .set(setting)
      .then(() => Alert.alert("Success", "Saved"))
      .catch(() => Alert.alert("Error", "Something Went Wrong !"));
  }

  function getSetting() {
    database()
      .ref(SETTING_COLLECTION)
      .on("value", (snapshot) => {
        const item = snapshot.val() || { language: "", email: "", filter: [] };
        dispatch(addSetting(item));
      });
  }

  function changeFormInput(key, value) {
    dispatch(addSetting({ ...setting, [key]: value }));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={{ flex: 1 }}>
          {formInput && formInput.length > 0
            ? formInput.map((props, index) =>
                props.type === "input" ? (
                  <View>
                    <Controller
                      control={control}
                      render={({ onChange, onBlur, value }) => (
                        <Input
                          {...props}
                          keyProp={index}
                          value={setting[props.name]}
                          onChangeText={(value) =>
                            changeFormInput(props.name, value)
                          }
                        />
                      )}
                      name={props.name}
                      rules={{
                        required: "Enter your e-mail",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Enter a valid e-mail address",
                        },
                      }}
                      defaultValue={setting[props.name]}
                    />
                    {errors.email && (
                      <Text
                        style={{
                          color: "red",
                          paddingVertical: Distances.halfDistance,
                        }}
                      >
                        {errors.email.message}
                      </Text>
                    )}
                  </View>
                ) : props.multiple ? (
                  <MultiPicker
                    {...props}
                    keyProp={index}
                    value={setting[props.name]}
                    onChange={(value) => changeFormInput(props.name, value)}
                  />
                ) : (
                  <Picker
                    {...props}
                    keyProp={index}
                    value={setting[props.name]}
                    onChange={(value) => changeFormInput(props.name, value)}
                  />
                )
              )
            : null}

          <View style={{ flex: 1 }}>
            <Button title="Kaydet" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
