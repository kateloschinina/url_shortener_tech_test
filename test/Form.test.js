import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { Form } from '../src/Form';

describe('Form', () => {
  it('should render a form', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <button>Add</button>
    ])).to.equal(true);
  });
});
