import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ThemeProvider } from "./context/themeContext";
import App from "./App";

const title = "React with Webpack and Babel";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App title={title} />
    </ThemeProvider>
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
