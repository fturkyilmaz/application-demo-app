import React, { useMemo, useEffect } from "react";
import { ScrollView, SafeAreaView, View, Button } from "react-native";
import styles from "./styles";
import controls from "../../../assets/data/controls.json";
import Input from "../../components/Input";
import Picker from "../../components/Picker";
import MultiPicker from "../../components/MultiPicker";
import { useSelector, useDispatch } from "react-redux";
import { addSetting } from "../../redux/actions/settingActions";
import { useForm, Controller } from "react-hook-form";
import { Text } from "../../components/Themed";
import Distances from "../../constants/Distances";

export default function SettingScreen() {
  const formInput = useMemo(() => controls.controls, []);
  const setting = useSelector((state) => state.setting.setting);
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  // useEffect(() => {
  //    const registerList =
  // }, [register]);

  function addFilter(key, value) {
    dispatch(addSetting({ ...setting, [key]: value }));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.container}>
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
                          onChangeText={(value) => addFilter(props.name, value)}
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

          <Button
            title="Press me"
            color="#f194ff"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
