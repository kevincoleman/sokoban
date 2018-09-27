import React, { Component } from "react";
import "./Level.css";
import Footer from "./Footer";
import Block from "./Block";
import levels from "./levels.js";

class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: 0,
      pushes: 0,
      time: "00:00:00",
      level: levels.filter(level => props.level == level.number)[0]
    };
  }

  render() {
    // add ids for indexing
    this.state.level.chart.grid.forEach((block, index) => {
      block.id = index;
    });
    return (
      <div className="Level">
        <div
          className="chart"
          style={{
            width: this.state.level.chart.width * 64
          }}
        >
          {this.state.level.chart.grid.map(block => (
            <Block type={block.type} x={block.x} y={block.y} key={block.id} />
          ))}
        </div>
        <Footer
          level={this.props.level}
          moves={this.state.moves}
          pushes={this.state.pushes}
          time={this.state.time}
        />
      </div>
    );
  }
}

export default Level;
