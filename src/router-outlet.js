import React from "react";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Router_outlet() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </React.Fragment>
  );
}
