import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Level from './Level';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/level/:number" component={Level} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
