import React, { useMemo, useEffect } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
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

export default function SettingScreen() {
  const formInput = useMemo(() => controls.controls, []);
  const setting = useSelector((state) => state.setting.setting);
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("BABAAA")
    getSetting();
  };

  function getSetting() {
    const setting = database()
      .ref("/setting")
      .on("value", (snapshot) => {
        console.log("User data: ", snapshot.val());
      });
  }

  useEffect(() => {
    getSetting();
  }, []);

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
                  />
                ) : (
                  <Picker
                    {...props}
                    keyProp={index}
                    value={setting[props.name]}
                  />
                )
              )
            : null}

          <View style={{ flex: 1 }}>
            <Button
              title="Kaydet"
              color="#f194ff"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
