import * as React from 'react';
import './App.css';
// import axios from 'axios';

class App extends React.Component<{}, {}> {
  state = {
    users: ``,
    user: ``
  };

  componentDidMount() {
    // axios.get(`http://localhost:3000/user`)
    //   .then(res => {
    //     this.setState(previousState => ({ users: res.data }));
    //   });
    // axios.get(`http://localhost:3000/user/1`)
    //   .then(res => {
    //     this.setState(previousState => ({ user: res.data }));
    //   });
  }

  render() {
    
    return (
      <div>
        <div id="app-header">
        <img src="/accountability-logo.png" id="header-logo" />
        <h1>Accountability</h1>
        <div />
        </div>
        <div id="app-content">
          {/* <p>All users: {JSON.stringify(this.state.users)}</p>
          <p>One user: {JSON.stringify(this.state.user)}</p> */}
          <h3 className="restrained">Workout Group<button>Finish it!</button></h3>
          <div className="table restrained">
            <div>Brad</div>
            <div>Janet</div>
            <div>Tim</div>
            <div className="add">+ Add a Groupie</div>
          </div>
        </div>
        <div id="app-footer">
          Footer Stuff
        </div>
      </div>
    );
  }
}

export default App;
