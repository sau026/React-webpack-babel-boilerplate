import React from "react";
import {  BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom';
import PrivateRoute from './helper/privateRoutes'; // Private Routes, Will only accessible after Login
import AuthRoute from './helper/authRoutes'; // Auth Routes, Will only accessible before login.
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


export default function Router_outlet() {
  return (
    <React.Fragment>
      <AuthRoute exact path="/" component={Login}/>
      <AuthRoute exact path="/register" component={Register}/>
      <PrivateRoute exact path="/home" component={Home}/>
    </React.Fragment>
  );
}
