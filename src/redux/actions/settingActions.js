import { ADD_SETTING } from "../constants";

export function addSetting(payload) {
  return {
    type: ADD_SETTING,
    payload,
  };
}
