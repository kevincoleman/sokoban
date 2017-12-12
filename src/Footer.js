import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {

    return (
      <div className="Footer">
        <div className="level-number">{this.props.level}</div>
        <div className="move-count">moves:{this.props.moves}</div>
        <div className="push-count">pushes:{this.props.pushes}</div>
        <div className="time-count">time:{this.props.time}</div>
      </div>
    )

  }
}

export default Footer;
