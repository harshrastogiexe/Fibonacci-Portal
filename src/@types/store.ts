import { Theme, User } from ".";

interface Store {
  theme: Theme;
  user: User | null;
  loggedIn: boolean | null;
  auth2: gapi.auth2.GoogleAuth | null;
}

export default Store;
