import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../@types";
import Store from "../../@types/store";
import { setGoogleUserData } from "../../actions";
import GoogleSignUpButton from "../GoogleSignUpButton/GoogleSignUpButton";
import GreetUser from "../GreetUser/GreetUser";

import "./style.scss";

const Header = () => {
  const { auth2, isLoggedIn, user } = useSelector((state: Store) => ({
    auth2: state.auth2,
    isLoggedIn: state.loggedIn,
    user: state.user,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    console.count("Effect 2");
    if (!auth2) return;

    const setLoginStatus = (state: boolean) =>
      dispatch<LoginAction>({
        type: "SET_LOGIN_STATUS",
        payload: state,
      });
    const setUserData = () => dispatch(setGoogleUserData());

    const loginState = auth2!.isSignedIn.get();
    setLoginStatus(loginState);
    loginState && setUserData();
  }, [auth2, dispatch]);

  if (isLoggedIn === null) {
    return null;
  }

  const userFirstName = user && user.name ? user.name.split(" ")[0] : "";

  return (
    <section className='header'>
      {/* {isLoggedIn && <GreetUser firstName={userFirstName} />} */}
      {/* {!isLoggedIn && <GoogleSignUpButton />} */}
      {/* <GoogleSignUpButton /> */}
      <GreetUser firstName={"Vinayak"} />
    </section>
  );
};

export default Header;
