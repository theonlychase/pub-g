import React, { Component } from 'react';
import { Switch, Route }  from "react-router-dom";
import Header from './Header.js';
import Stats from './Stats.js';
import Home from './Home.js';
import NoMatch from './NoMatch.js';
import '../assets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleSubmit = (username) => {
    this.setState({
      username: username
    })
  }

  render() {
    var username = this.state.username;
    return (
      <div className="app">
        <Header onSubmit={this.handleSubmit}/>
          <Switch>
              <Route exact path='/' render={(props) => (<Home {...props} data={username}/>
)}/>
              <Route exact path='/stats' component={Stats} />
              <Route component={NoMatch}/>
          </Switch>
      </div>
    );
  }
}

export default App;
