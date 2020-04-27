import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./auth";

function UnAuthGuard({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/game",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default UnAuthGuard;