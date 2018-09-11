import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Level from "./Level";
import Lobby from "./Lobby";

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/level/:level"
              component={props => <Level level={props.match.params.level} />}
            />
            <Route exact path="(/|/lobby)" component={Lobby} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
