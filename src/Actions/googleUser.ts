import { Dispatch } from "redux";
import { UserAction } from "../@types";

type UserActionHandler = () => (dispatch: Dispatch<UserAction>) => void;

const setGoogleUserData: UserActionHandler = () => (dispatch) => {
  const userData = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();

  const user = {
    email: userData?.getEmail(),
    familyName: userData?.getFamilyName(),
    givenName: userData?.getGivenName(),
    id: userData?.getEmail(),
    imageURL: userData?.getImageUrl(),
    name: userData?.getName(),
  };

  dispatch({ type: "@USER/ADD", payload: user });
};

const removeGoogleUser: UserActionHandler = () => (dispatch) => {
  dispatch({ type: "@USER/REMOVE" });
};

export { setGoogleUserData, removeGoogleUser };
