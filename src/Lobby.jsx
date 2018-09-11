import React, { Component } from "react";
import "./Lobby.css";
import { Link } from "react-router-dom";

class Lobby extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={`/level/1`}>one</Link>
          </li>
          <li>
            <Link to={`/level/2`}>two</Link>
          </li>
          <li>
            <Link to={`/level/3`}>three</Link>
          </li>
          <li>
            <Link to={`/level/4`}>four</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Lobby;
