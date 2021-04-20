import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { setupOAuth } from "../../actions";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

import "./style.scss";

const CLIENT_ID = process.env.REACT_APP_OAUTH_ID;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (CLIENT_ID) dispatch(setupOAuth(CLIENT_ID));
    else console.error("CLIENT_ID: ", CLIENT_ID);
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/'>
          <Header />
        </Route>
      </Switch>
    </>
  );
};

export default App;
