import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'typeface-montserrat';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';


 //state ={state} dispatch = {store.dispatch.bind(store)}

let rerenderEntireTree = () =>{
ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>, document.getElementById('root'));
}
rerenderEntireTree();

serviceWorker.unregister();
