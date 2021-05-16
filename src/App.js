import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./router-outlet";
import Image from "./assets/images";
import IM from "./assets/images/sun.jpg";
import "./App.scss";

import Login from "./pages/Login";

const App = ({ title }) => {
  return (
    <BrowserRouter>
      <RouterOutlet />
    </BrowserRouter>
    // <div>
    //     <h2 className="heading">{title}</h2>
    //     <img src={IM}/>
    //     <Login/>
    // </div>
  );
};

export default App;
