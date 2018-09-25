import React, { Component } from "react";
import "./Block.css";

class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`block ${this.props.type}`}
        style={{
          gridColumnStart: this.props.x,
          gridColumnEnd: this.props.x + 1,
          gridRowStart: this.props.y,
          gridRowEnd: this.props.y + 1
        }}
      />
    );
  }
}

export default Level;
