interface User {
  name: string | undefined;
  email: string | undefined;
  id: string | undefined;
  imageURL: string | undefined;
  givenName: string | undefined;
  familyName: string | undefined;
}

type UserActionTypes = "@USER/ADD" | "@USER/REMOVE";

export interface UserAction {
  type: UserActionTypes;
  payload?: User | null;
}

const initialState: User | null = null;

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "@USER/ADD":
      return { ...action.payload };
    case "@USER/REMOVE":
      return null;
    default:
      return state;
  }
};

export default userReducer;
