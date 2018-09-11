import React, { Component } from "react";
import "./Level.css";
import Footer from "./Footer";

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
    return (
      <div className="level">
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
