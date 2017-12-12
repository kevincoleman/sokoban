import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Level.css';
import maps from './levels/levels.json';

class Level extends Component {

  constructor(props) {
    super(props);
  }

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
        { displayLevel(maps.levels[this.props.match.params.number - 1]) }
      </div>
    )

  }
}

export default Level;
