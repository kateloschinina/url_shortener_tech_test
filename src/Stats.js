import React, { Component } from 'react';
import database from './helpers/database/Database';

export class Stats extends Component {
  render() {
    return (
      <div className="stats-div">
        <h2>Statistics about your URL:</h2>
        <p className="stats">Origin: {}</p>
        <p className="stats">Shortened version: {}</p>
        <p className="stats">visited: times</p>
        <p className="stats">on: dates</p>
      </div>
    );
  }
}
