import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  //Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import AuthGuard from "./guard/Auth";
import UnAuthGuard from "./guard/Unauth";

import Game from "./game/Game";
import NavBar from "../shared/NavBar";
import Login from "./login/Login";

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <AuthGuard path="/game">
          <Game />
        </AuthGuard>
        <UnAuthGuard path="/">
          <Login />
        </UnAuthGuard>
        <UnAuthGuard path="/login">
          <Login />
        </UnAuthGuard>
      </Switch>
    </Router>
  );
};

export default App;
