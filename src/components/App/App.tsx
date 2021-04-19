import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import "./style.scss";

const App = () => {
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
