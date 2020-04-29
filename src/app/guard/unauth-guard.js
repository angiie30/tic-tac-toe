import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./auth";

export default function UnAuthGuard({ children, ...rest }) {
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
