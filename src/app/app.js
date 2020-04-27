import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";

import Game from "./game/game";
import NavBar from "../shared/NavBar";
import Login from "./login/login";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
