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
import {useOnceTranslations} from '../../utils/languages';

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

  function showNetworkAlert() {
    Alert.alert('Error Connection', 'Open Wifi and mobile data.');
  }

  useEffect(() => {
    if (!isConnected) {
      showNetworkAlert();
    }
  }, [isConnected]);

  function onSubmit() {
    database()
      .ref(Config.COLLECTION_NAME)
      .set(setting)
      .then(() => Alert.alert('Success', 'Saved'))
      .catch(() => Alert.alert('Error', 'Something Went Wrong !'));
  }

  function getSetting() {
    database()
      .ref(Config.COLLECTION_NAME)
      .on('value', (snapshot) => {
        const item = snapshot.val() || {language: '', email: '', filter: []};
        dispatch(addSetting(item));
      });
  }

  function changeFormInput(key, value) {
    dispatch(addSetting({...setting, [key]: value}));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        {formInput && formInput.length > 0
          ? formInput.map((props) =>
              props.type === 'input' ? (
                <View>
                  <Input
                    keyProp={props.name}
                    value={setting[props.name]}
                    onChangeText={(value) => changeFormInput(props.name, value)}
                    {...props}
                  />
                </View>
              ) : props.multiple ? (
                <MultiPicker
                  keyProp={props.name}
                  value={setting[props.name]}
                  onChange={(value) => changeFormInput(props.name, value)}
                  {...props}
                />
              ) : (
                <Picker
                  keyProp={props.name}
                  value={setting[props.name]}
                  onChange={(value) => changeFormInput(props.name, value)}
                  {...props}
                />
              ),
            )
          : null}
        <View style={{flex: 1, paddingVertical: Distances.defaultDistance}}>
          <Button
            onPress={onSubmit}
            title={buttonText}
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
