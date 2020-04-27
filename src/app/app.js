import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  //Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import AuthGuard from "./guard/auth-guard";
import UnAuthGuard from "./guard/unauth-guard";

import Game from "./game/game";
import NavBar from "../shared/NavBar";
import Login from "./login/login";

export default function App() {
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
}
