import React, { Component } from 'react';
import './Level.css';
import Footer from './Footer';
import maps from './levels/levels.json';

class Level extends Component {

  constructor(props) {
    super(props);
    this.state = {
      level: this.props.match.params.number,
      moves: 0,
      pushes: 0,
      time: 0
    }
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
          key={index}
          style={{gridColumn: getCol(level, index), gridRow: getRow(level, index)}}
        >
        </div>
      });
    }

    return (
      <div className="Level">
        { displayLevel(maps.levels[this.state.level - 1]) }
        <Footer
          level={this.state.level}
          moves={this.state.moves}
          pushes={this.state.pushes}
          time={this.state.time}
        />
      </div>
    )

  }
}

export default Level;
