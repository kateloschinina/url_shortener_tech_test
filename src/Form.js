import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullURL: '',
      shortURL: ''
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  setText(event) {
    this.setState({fullURL: event.target.value, shortURL: ''});
  }
  handleClick() {
    this.props.onSubmit(this.state.fullURL);
  }
  render() {
    return (
      <div>
        <input value={this.state.fullURL} onChange={this.setText}/>
        <button onClick={this.handleClick}>Shorten</button>
      </div>
    );
  }
}
Form.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
