import React, { Component } from "react";
import "./Level.css";
import Footer from "./Footer";
import Block from "./Block";

class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: 0,
      pushes: 0,
      time: "00:00:00"
    };
  }

  render() {
    let data = {
      number: 1,
      levelMap: {
        width: 7,
        height: 5,
        grid: [
          { type: "brick", x: 1, y: 1 },
          { type: "brick", x: 2, y: 1 },
          { type: "brick", x: 3, y: 1 },
          { type: "brick", x: 4, y: 1 },
          { type: "brick", x: 5, y: 1 },
          { type: "brick", x: 6, y: 1 },
          { type: "brick", x: 7, y: 1 },
          { type: "brick", x: 1, y: 2 },
          { type: "blank", x: 2, y: 2 },
          { type: "blank", x: 3, y: 2 },
          { type: "blank", x: 4, y: 2 },
          { type: "blank", x: 5, y: 2 },
          { type: "blank", x: 6, y: 2 },
          { type: "brick", x: 7, y: 2 },
          { type: "brick", x: 1, y: 3 },
          { type: "blank", x: 2, y: 3 },
          { type: "diamond", x: 3, y: 3 },
          { type: "box", x: 4, y: 3 },
          { type: "man", x: 5, y: 3 },
          { type: "blank", x: 6, y: 3 },
          { type: "brick", x: 7, y: 3 },
          { type: "brick", x: 1, y: 4 },
          { type: "blank", x: 2, y: 4 },
          { type: "blank", x: 3, y: 4 },
          { type: "blank", x: 4, y: 4 },
          { type: "blank", x: 5, y: 4 },
          { type: "blank", x: 6, y: 4 },
          { type: "brick", x: 7, y: 4 },
          { type: "brick", x: 1, y: 5 },
          { type: "brick", x: 2, y: 5 },
          { type: "brick", x: 3, y: 5 },
          { type: "brick", x: 4, y: 5 },
          { type: "brick", x: 5, y: 5 },
          { type: "brick", x: 6, y: 5 },
          { type: "brick", x: 7, y: 5 }
        ]
      }
    };

    // add ids before rendering
    data.levelMap.grid.forEach((block, index) => {
      block.id = index;
    });

    return (
      <div className="Level">
        <div
          className="levelMap"
          style={{
            width: data.levelMap.width * 64
          }}
        >
          {data.levelMap.grid.map(block => (
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
