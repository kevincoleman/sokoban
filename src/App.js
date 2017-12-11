import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Level from './Level';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Level />
        <Footer />
      </div>
    )
  }
}

export default App;
