import React, { Component } from 'react';
import database from './helpers/database/Database';

export class Stats extends Component {
  render() {
    return (
      <div>
        <h1>Statistics about URL</h1>
        <p>visited: times</p>
        <p>on: dates</p>
      </div>
    );
  }
}
