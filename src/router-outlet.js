import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route,
} from "react-router-dom";
import PrivateRoute from "./helper/privateRoutes"; // Private Routes, Will only accessible after Login
import AuthRoute from "./helper/authRoutes"; // Auth Routes, Will only accessible before login.

const LoginRoute = lazy(() => import("./pages/Login"));
const RegisterRoute = lazy(() => import("./pages/Register"));
const HomeRoute = lazy(() => import("./pages/Home"));

export default function Router_outlet() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AuthRoute exact path="/" component={LoginRoute} />
          <AuthRoute exact path="/register" component={RegisterRoute} />
          <PrivateRoute exact path="/home" component={HomeRoute} />
        </Switch>
      </Suspense>
    </Router>
  );
}
