import React, {useMemo, useEffect, useContext} from 'react';
import {ScrollView, View, Alert, SafeAreaView} from 'react-native';
import database from '@react-native-firebase/database';
import styles from './styles';
import controls from '../../../assets/data/controls.json';
import Input from '../../components/Input';
import Picker from '../../components/Picker';
import MultiPicker from '../../components/MultiPicker';
import {useSelector, useDispatch} from 'react-redux';
import {addSetting} from '../../redux/actions/settingActions';
import Button from '../../components/Button';
import Config from 'react-native-config';
import {NetworkContext} from '../../context/NetworkContext';
import Distances from '../../constants/Distances';
import {useOnceTranslations, setI18nConfig} from '../../utils/languages';

const initialValue = {language: '', email: '', filter: []};

export default function SettingScreen() {
  const [buttonText] = useOnceTranslations(['screens.setting.buttonText']);

  const formInput = useMemo(() => controls.controls, []);

  const {isConnected} = useContext(NetworkContext);

  const setting = useSelector((state) => state.setting.setting);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isConnected) {
      getSetting();
    }
  }, []);

  useEffect(() => {
    if (!isConnected) {
      showNetworkAlert();
    }
  }, [isConnected]);

  function showNetworkAlert() {
    Alert.alert('Error Connection', 'Open Wifi and mobile data.');
  }

  function getSetting() {
    database()
      .ref(Config.COLLECTION_NAME)
      .on('value', (snapshot) => {
        const item = snapshot.val() || initialValue;

        dispatch(addSetting(item));
      });
  }

  function changeFormInput(key, value) {
    dispatch(addSetting({...setting, [key]: value}));
  }

  function _renderFormInput() {
    const form =
      formInput && formInput.length > 0
        ? formInput.map((props) =>
            props.type === 'input' ? (
              <View
                key={`textInput_${props.name}`}
                style={styles.inputContainer}>
                <Input
                  caption={props.caption}
                  keyProp={props.name}
                  value={setting[props.name]}
                  onChangeText={(value) => changeFormInput(props.name, value)}
                />
              </View>
            ) : props.multiple ? (
              <View
                style={styles.inputContainer}
                key={`multiPicker_${props.name}`}>
                <MultiPicker
                  keyProp={props.name}
                  value={setting[props.name]}
                  onChange={(value) => changeFormInput(props.name, value)}
                  {...props}
                />
              </View>
            ) : (
              <View style={styles.inputContainer} key={`picker_${props.name}`}>
                <Picker
                  keyProp={props.name}
                  value={setting[props.name]}
                  onChange={(value) => changeFormInput(props.name, value)}
                  {...props}
                />
              </View>
            ),
          )
        : null;

    return form;
  }

  async function onSubmit() {
    const isValidMail = emailValidation(setting.email);

    if (isValidMail) {
      database()
        .ref(Config.COLLECTION_NAME)
        .set(setting)
        .then(() => {
          Alert.alert('Success', 'Saved');
        })
        .catch(() => Alert.alert('Error', 'Something Went Wrong !'));

      await setI18nConfig(setting.language);
    }
  }

  function emailValidation(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.innerContainer}
        keyboardShouldPersistTaps="handled">
        <View style={{flex: 1, paddingVertical: Distances.defaultDistance}}>
          {_renderFormInput()}
          <Button
            onPress={async () => await onSubmit()}
            text={buttonText}
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
