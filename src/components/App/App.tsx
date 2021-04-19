import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { setGoogleUserData, setupOAuth } from "../../Actions";
import Navbar from "../Navbar/Navbar";

import "./style.scss";

const CLIENT_ID = process.env.REACT_APP_OAUTH_ID;

const App = () => {
  const dispatch = useDispatch();
  console.count("App Render Count");
  useEffect(() => {
    CLIENT_ID && dispatch(setupOAuth(CLIENT_ID));
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/'></Route>
      </Switch>
    </>
  );
};

export default App;
