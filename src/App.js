import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyle from "./theme";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import PublicRoute from "./navigatior/PublicRoute";
import PrivateRoute from "./navigatior/PrivateRoute";
import ErrorComp from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const userHasAccess = useSelector((state) => state.home?.hasAccess);
  const error = useSelector((state) => state.home?.error);
  const loading = useSelector((state) => state.home?.loading);
  return (
    <BrowserRouter>
      {error && <ErrorComp error={error} />}
      {loading && <Loading />}
      <GlobalStyle />
      <Switch>
        <PublicRoute
          hasAccess={userHasAccess}
          exact
          path="/"
          component={LoginPage}
        />
        <PrivateRoute
          hasAccess={userHasAccess}
          exact
          path="/dashboard"
          component={DashboardPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
