import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from './App';

const title = 'React with Webpack and Babel';

ReactDOM.render(
    <Provider store={store}>
    <App title={title} />
    </Provider>,
    document.getElementById('app')
)

module.hot.accept();