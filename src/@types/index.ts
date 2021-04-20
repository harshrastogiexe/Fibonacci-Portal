// User Types
export interface User {
  name?: string | undefined;
  email?: string | undefined;
  id?: string | undefined;
  imageURL?: string | undefined;
  givenName?: string | undefined;
  familyName?: string | undefined;
}

export type UserActionTypes = "@USER/ADD" | "@USER/REMOVE";

export interface UserAction {
  type: UserActionTypes;
  payload?: User | null;
}

export type Theme = "DARK" | "LIGHT";

export interface ThemeAction {
  type: "SET_THEME";
  payload: Theme;
}

export type GoogleAuthInstance = typeof gapi.auth2.GoogleAuth;

export type ActionTypes = "oAuth/SETUP";

export interface AuthAction {
  type: ActionTypes;
  payload: GoogleAuthInstance | null;
}

export type LoginType = "LOGIN" | "LOGOUT" | "SET_LOGIN_STATUS";

export interface LoginAction {
  type: LoginType;
  payload: boolean;
}
