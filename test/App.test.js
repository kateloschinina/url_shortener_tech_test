import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../src/App';
import Form from '../src/Form';

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
