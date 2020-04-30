import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";

export const UnAuthGuard = ({ children, ...rest }) => {
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
};

export default UnAuthGuard;
