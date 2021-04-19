const loggedIn: boolean | null = null;

type LoginType = "LOGIN" | "LOGOUT" | "SET_LOGIN_STATUS";

export interface LoginAction {
  type: LoginType;
  payload: boolean;
}

const loginReducer = (state = loggedIn, action: LoginAction) => {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return action.payload;
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default loginReducer;
