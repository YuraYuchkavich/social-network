import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"


import Main from './components/main/main';
import Header from './components/header/header';


const  App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main state = {props.state} dispatch = {props.dispatch}/>
      </div>
    </BrowserRouter>    
  );
  
  }


export default App;
