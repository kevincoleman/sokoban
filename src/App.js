import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render() {

    var level1 = {
      width: 4,
      height: 4,
      index: [
        "w", "w", "w", "w",
        "w", " ", "b", "w",
        "w", "d", " ", "w",
        "w", "w", "w", "w"
      ]
    }

    var level2 = {
      width: 5,
      height: 5,
      index: [
        "w", "w", "w", "w", "w",
        "w", " ", " ", " ", "w",
        "w", " ", "b", " ", "w",
        "w", " ", " ", " ", "w",
        "w", "w", "w", "w", "w"
      ]
    }

   let displayLevel = function(level) {
      return level.index.map((type, index) => {
        return <div
          className={"block " + type}
          style={{gridColumn: (index % level.width) + 1, gridRow: (index + 1) / level.height}}
        >
        </div>
      });
    }

    return (
      <div className="App">
        { displayLevel(level2) }
      </div>
    );
  }
}

export default App;
