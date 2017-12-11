import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Level.css';

import level1 from './levels/1.json';
import level2 from './levels/2.json';

class Level extends Component {

  render() {
    let getCol = function(level, index) {
      return (index % level.width) +1;
    }
    
    let getRow = function(level, index) {
      return (index + 1) / level.height;
    }

    let displayLevel = function(level) {
      return level.index.map((type, index) => {
        return <div
          className={"block " + type}
          style={{gridColumn: getCol(level, index), gridRow: getRow(level, index)}}
        >
        </div>
      });
    }

    return (
      <div className="Level">
        { displayLevel(level2) }
      </div>
    )

  }
}

export default Level;
