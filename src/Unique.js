import React, { Component } from 'react';
import { Stats } from './Stats';

export class Unique extends Component {
  render() {
    return this.props.valid ? (this.props.state ?
      (this.props.pushed ?
        (<p>Your URL was pushed.</p>) : null) :
      (<div>
        <p>The shotened version of this URL already exists:</p>
        <Stats fullURL={this.props.fullURL}/>
      </div>)) :
      (<p>This URL does not seem real, try another one.</p>);
  }
}
