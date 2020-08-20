import {ACCESS_TOKEN, USER_TYPE} from './constants';
import AsyncStorage from '@react-native-community/async-storage';

const saveAccessToken = async (accessToken) => {
  return AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
};

const getAccessToken = async () => {
  return await AsyncStorage.getItem(ACCESS_TOKEN);
};

const removeUser = async () => {
  await AsyncStorage.setItem(ACCESS_TOKEN, '');
  await AsyncStorage.setItem(USER_TYPE, '');
};

export default {
  saveAccessToken,
  getAccessToken,
  saveUserType,
  isUserMerchant,
  removeUser,
};
