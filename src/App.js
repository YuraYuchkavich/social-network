import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"


import Main from './components/main/main';
import Header from './components/header/header';


class  App extends React.Component {

  


  render(){
  
    console.log(this.props);
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main state = {this.props.state} dispatch = {this.props.dispatch}/>     
      </div>
    </BrowserRouter>    
  );
  
  }
}

export default App;