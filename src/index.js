import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {setData,stateInit} from './redux/weather-reducer';
import store from './redux/redux-store';

 

let rerenderEntireTree = (state) =>{
  
ReactDOM.render(<App state ={state} dispatch = {store.dispatch.bind(store)} />, document.getElementById('root'));
}
async function start(){
await setData();
rerenderEntireTree(store.getState());
}
start();

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
