import React from "react";
import Image from "./assets/images";
import IM from "./assets/images/sun.jpg";
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./router-outlet";
import { lightTheme, darkTheme, purpleTheme } from "./assets/constant/theme";
import "./App.scss";

// const App = ({title}) => {
//     return(
//         <div>
//             <h2 className="heading">{title}</h2>
//             <img src={IM}/>
//         </div>
//     )
// }

const App = ({ title }) => {
  const root = document.getElementsByTagName("html")[0];
  root.style.cssText = darkTheme.join(";");

  return (
    <BrowserRouter>
      <RouterOutlet />
    </BrowserRouter>
  );
};

export default App;
