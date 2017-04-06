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
  // handleStatsPage(data) {
  //   console.log(data.location.pathname.substr(1).slice(0,-6));
  // }
  render() {
    return (
      <div className="App">
        <header>
            <div className="header-content">
                <div className="header-content-inner">
                    <h1 id="homeHeading">This is the best ever   URL shortner</h1>
                    <hr></hr>
                    <p>If you want to shorten a URL - enter it in the form below.</p>
                    <Router>
                      <div>
                        <Route path="/" component={Form}/>
                        <Route path="/:short/stats" render={props => (
                          <Stats url={props} />
                        )}/>
                        <Route path="/:short" render={props => (
                          <Redirect to={this.handleShortUrl(props)}/>
                        )}/>
                      </div>
                    </Router>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
