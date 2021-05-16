import React from 'react';
import Image from "./assets/images";
import IM from './assets/images/sun.jpg' 
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./router-outlet";
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
  return (
    <BrowserRouter>
      <RouterOutlet />
    </BrowserRouter>
  );
};

export default App;
