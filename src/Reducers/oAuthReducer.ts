import { AuthAction, GoogleAuthInstance } from "../@types";

type OAuthReducer = (
  auth2: GoogleAuthInstance | null,
  action: AuthAction
) => GoogleAuthInstance | null;

const oAuthReducer: OAuthReducer = (state = null, action: AuthAction) => {
  switch (action.type) {
    case "oAuth/SETUP":
      return action.payload;
    default:
      return state;
  }
};

export default oAuthReducer;
