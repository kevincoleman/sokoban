import React, { Component } from "react";
import "./Lobby.css";
import { Link } from "react-router-dom";
import levels from "./levels.js";

class Lobby extends Component {
  render() {
    return (
      <div className="lobby">
        <h1>Sokoban Classic</h1>
        <nav>
          <ul>
            {levels.map(level => (
              <li key={level.number}>
                <Link to={`/level/${level.number}`}>Level {level.number}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Lobby;
