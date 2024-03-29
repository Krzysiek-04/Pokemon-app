import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";
import Stopwatch from "../pages/Stopwatch";
import Counter from "../pages/Counter";
import CharacterList from "../pages/CharacterList";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import CharacterDetails from "../pages/CharacterDetails";
import ErrorPage from "../pages/ErrorPage";
import SuccessLogin from "../pages/SuccessLogin";
import userInfo from "../staticData/userInfo";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutme" children={<AboutMe userInfo={userInfo} />} />
        <Route path="/stopwatch" component={Stopwatch} />
        <Route path="/counter" component={Counter} />
        <Route path="/character-list" exact component={CharacterList} />
        <Route
          path="/character-list/:name/:id"
          children={<CharacterDetails />}
        />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/success-login" component={SuccessLogin} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Routing;
