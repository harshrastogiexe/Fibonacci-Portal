import { Dispatch } from "redux";
import { UserAction } from "../Reducers/userReducer";

const setGoogleUserData = () => (
  dispatch: Dispatch<UserAction>,
  getStore: () => { auth2: gapi.auth2.GoogleAuth | null }
) => {
  const auth2 = getStore().auth2;
  if (!auth2) {
    console.error("auth2 instance not found");
    return;
  }
  const userData = auth2!.currentUser.get().getBasicProfile();

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

const removeGoogleUser = () => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: "@USER/REMOVE" });
};

export { setGoogleUserData, removeGoogleUser };
