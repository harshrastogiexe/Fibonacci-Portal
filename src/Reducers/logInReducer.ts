import { LoginAction } from "../@types";

type LoginReducer = (state: boolean | null, action: LoginAction) => boolean | null;

const loginReducer: LoginReducer = (loggedIn = null, action) => {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return action.payload;
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return loggedIn;
  }
};

export default loginReducer;
