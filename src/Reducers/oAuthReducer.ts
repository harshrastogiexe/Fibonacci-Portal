type GoogleAuthInstance = typeof gapi.auth2.GoogleAuth;

type ActionTypes = "oAuth/SETUP";

export interface AuthAction {
  type: ActionTypes;
  payload: ActionTypes extends "oAuth/SETUP" ? GoogleAuthInstance : null;
}

const initialState: GoogleAuthInstance | null = null;

const oAuthReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case "oAuth/SETUP":
      return action.payload;
    default:
      return state;
  }
};

export default oAuthReducer;
