import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render() {

    var level1 = {
      width: 4,
      height: 4,
      index: [
        "brick", "brick", "brick", "brick",
        "brick", "",      "box",   "brick",
        "brick", "",      "",      "brick",
        "brick", "brick", "brick", "brick"
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
        { displayLevel(level1) }
      </div>
    );
  }
}

export default App;
