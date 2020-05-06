import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"


import Main from './components/main/main';
import HeaderContainer from './components/header/headerContainer';
import Axios from 'axios';
import {initilizeApp} from './redux/app-reducer';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) =>({
});
export default connect(mapStateToProps,{initilizeApp})(App);