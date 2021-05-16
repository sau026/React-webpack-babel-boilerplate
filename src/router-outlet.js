import React from "react";
import { Route } from "react-router-dom";
import Login from "./pages/Login";

export default function Router_outlet() {
    return (
        <React.Fragment>
        <Route exact path="/" component={Login}></Route>
        </React.Fragment>
    );
  }