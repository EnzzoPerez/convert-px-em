import React, { Component } from 'react';
import InputList from "./components/inputList";
import Header from "./components/header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header />
        <InputList />
      </div>
    );
  }
}

export default App;
