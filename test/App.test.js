import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../src/App';
import Form from '../src/Form';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('app should contain a form', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.containsAllMatchingElements([
      <Form />,
    ])).to.equal(true);
  });

  it('app should contain a router', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.containsAllMatchingElements([
      <Router>
        <div>
          <Route path="/" component={Form}/>
          <Route path="/:short/stats" />
          <Route path="/:short" />
        </div>
      </Router>
    ])).to.equal(true);
  });

  it('expect handleShortUrl to be called', () => {
    const wrapper = mount(<App/>);
    const spyOn = spy(App.prototype, 'handleShortUrl');
    <Route path="/:short" render={props => (
      expect(spyOn.called).to.equal(true)
    )}/>
  });

  it('app should call Route', () => {
    const wrapper = mount(<App/>);
    const spyOn = spy(Route);
    expect(spyOn.called).to.equal(false);
  });

  it('app should call Redirect', () => {
    const wrapper = mount(<App/>);
    const spyOn = spy(Redirect);
    expect(spyOn.called).to.equal(false);
  });

  it('app should call Redirect', () => {
    const wrapper = mount(<App/>);
    const spyOn = spy(Redirect);
    <Route path="/:short" render={props => (
      expect(spyOn.called).to.equal(true)
    )}/>
  });
});
