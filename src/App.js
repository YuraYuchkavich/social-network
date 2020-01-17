import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"


import Main from './components/main/main';
import HeaderContainer from './components/header/headerContainer';


const  App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer/>
        <Main/>
      </div>
    </BrowserRouter>    
  );
  
  }


export default App;
