import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {

  render() {

    return (
      <div className="Footer">
        <div className="level-number">01</div>
        <div className="move-count">moves:02</div>
        <div className="push-count">pushes:00</div>
        <div className="time-count">time:01:22:45</div>
      </div>
    )

  }
}

export default Footer;
