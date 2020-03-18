import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import redusers from "./redux/combineRedusers";

const store = createStore(redusers);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

