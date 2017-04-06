import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import database from './helpers/database/Database';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import { Form } from './Form';
import { Stats } from './Stats';

class App extends Component {
  handleShortUrl(data) {
    var shortURL = data.location.pathname.substr(1);
    database.ref('/items').on('value', snap => {
      for (var i = 0; i < Object.keys(snap.val()).length; i++) {
        if (shortURL === Object.values(snap.val())[i].shortURL) {
          window.location.assign(Object.values(snap.val())[i].fullURL);
        }
      }
    });
  }
  handleStatsPage(data) {
    console.log(data.location.pathname.substr(1).slice(0,-6));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <Route path="/" component={Form}/>
            <Route path="/:short/stats" render={props => (
              <Redirect to={this.handleStatsPage(props)}/>
            )}/>
            <Route path="/:short" render={props => (
              <Stats url={props} />
            )}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
