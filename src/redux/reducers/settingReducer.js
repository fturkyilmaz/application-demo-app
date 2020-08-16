import { FETCH_SETTING, ADD_SETTING } from "../constants";

const initialState = {
  setting: { language: "tr", email: "deneme@gmail.com", filter: ["0", "1"] },
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SETTING:
      return {
        ...state,
        setting: action.payload,
      };
    default:
      return state;
  }
};

export default settingReducer;
