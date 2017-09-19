import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="block brick"
          style={{gridColumn: '2', gridRow: '1'}}
        ></div>
        <div
          className="block diamond"
          style={{gridColumn: '2', gridRow: '2'}}
        ></div>
        <div
          className="block box"
          style={{gridColumn: '3', gridRow: '2'}}
        ></div>
        <div
          className="block brick"
          style={{gridColumn: '4', gridRow: '2'}}
        ></div>
        <div
          className="block diamond"
          style={{gridColumn: '2', gridRow: '3'}}
        ></div>
        <div
          className="block brick"
          style={{gridColumn: '4', gridRow: '4'}}
        ></div>
      </div>
    );
  }
}

export default App;
