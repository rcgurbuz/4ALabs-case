import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, hasAccess, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        hasAccess ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
