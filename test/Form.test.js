import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';

import { Form } from '../src/Form';
import { Unique } from '../src/Unique';
import database from '../src/helpers/database/Database';

describe('Form', () => {
  it('should render a form', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.containsAllMatchingElements([
      <input className="btn btn-default btn-xl sr-button" />,
      <br></br>,
      <button>Shorten</button>
    ])).to.equal(true);
  });

  it('should render Unique', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.containsAllMatchingElements([
      <Unique />
    ])).to.equal(true);
  });

  it('should accept input', () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find('input');
    input.simulate('change', {target: { value: 'testURL' }});
    expect(wrapper.state('fullURL')).to.equal('testURL');
    expect(input.prop('value')).to.equal('testURL');
  });

  it('should call handleClick when Shorten is clicked', () => {
    const spyOn = spy(Form.prototype, 'handleClick');
    const wrapper = mount(<Form />);
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    expect(spyOn.calledOnce).to.equal(true);
  });

  it('should call getNextDatabaseNumber when Shorten is clicked', () => {
    const spyOn = spy(Form.prototype, 'getNextDatabaseNumber');
    const wrapper = mount(<Form />);
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    expect(spyOn.called).to.equal(true);
  });

  it('should call getNextDatabaseNumber when Shorten is clicked', () => {
    const spyOn = spy(Form.prototype, 'checkURLUniqueness');
    const wrapper = mount(<Form />);
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    expect(spyOn.called).to.equal(true);
  });

  it('expect database ref to be called', () => {
    const wrapper = mount(<Form />);
    const spyOn = spy(database.ref('/items'), 'on');
    expect(spyOn.called).to.equal(false);
  });
});
