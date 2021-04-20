import { User, UserAction } from "../@types";

type UserReducer = (user: User | null, action: UserAction) => User | null;

const userReducer: UserReducer = (state = null, action) => {
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
