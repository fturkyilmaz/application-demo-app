import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import settingReducer from "../reducers/settingReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    setting: settingReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
