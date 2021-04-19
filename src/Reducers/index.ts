import { combineReducers } from "redux";
import loginReducer from "./logInReducer";
import oAuthReducer from "./oAuthReducer";
import { themeReducer } from "./themeReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  theme: themeReducer,
  auth2: oAuthReducer,
  loggedIn: loginReducer,
  user: userReducer,
});

export default reducers;
