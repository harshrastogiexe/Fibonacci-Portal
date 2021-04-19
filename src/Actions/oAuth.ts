import { Dispatch } from "redux";
import { AuthAction } from "../Reducers/oAuthReducer";
import { LoginAction } from "../Reducers/logInReducer";
import { setGoogleUserData } from ".";

// type GoogleAuthInstance = typeof gapi.auth2.GoogleAuth;

const setupOAuth = (clientId: string) => async (
  dispatch: Dispatch<AuthAction | LoginAction | any>
) => {
  window.gapi.load("client:auth2", () => loadOAuth(clientId, dispatch));
};

const loadOAuth = async (clientId: string, dispatch: Dispatch<AuthAction | LoginAction> | any) => {
  const config = {
    clientId,
    scope: "https://www.googleapis.com/auth/userinfo.email",
  };

  await window.gapi.client.init(config);
  const auth2 = window.gapi.auth2.getAuthInstance();
  const loggedInStatus = auth2.isSignedIn.get();

  dispatch({ type: "oAuth/SETUP", payload: auth2 as any });
  dispatch({ type: "SET_LOGIN_STATUS", payload: loggedInStatus });
  dispatch(setGoogleUserData());
};

export { setupOAuth };
