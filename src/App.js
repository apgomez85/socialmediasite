import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/users/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Social Media Site</h1>
        <h1>Hello world</h1>
        <User />
      </div>
    );
  }
}

export default App;
