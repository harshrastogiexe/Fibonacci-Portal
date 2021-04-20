import { Dispatch } from "redux";
import { AuthAction, LoginAction } from "../@types";

type DispatchHandler = Dispatch<AuthAction | LoginAction>;
type SetupOAuthHandler = (clientId: string) => (dispatch: DispatchHandler) => void;
type LoadAuth2Handler = (clientId: string, dispatch: DispatchHandler) => void;

const setupOAuth: SetupOAuthHandler = (clientId) => async (dispatch) => {
  window.gapi.load("client:auth2", () => loadOAuth(clientId, dispatch));
};

const loadOAuth: LoadAuth2Handler = async (clientId, dispatch) => {
  const config = {
    clientId,
    scope: "https://www.googleapis.com/auth/userinfo.email",
  };

  await window.gapi.client.init(config);
  const auth2 = window.gapi.auth2.getAuthInstance();

  dispatch({
    type: "oAuth/SETUP",
    payload: auth2 as any,
  });
};

export { setupOAuth };
