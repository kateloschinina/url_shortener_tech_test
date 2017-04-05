import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { Form } from '../src/Form';

describe('Form', () => {
  it('should render a form', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <button>Shorten</button>
    ])).to.equal(true);
  });

  it('should accept input', () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find('input');
    input.simulate('change', {target: { value: 'testURL' }});
    expect(wrapper.state('fullURL')).to.equal('testURL');
    expect(input.prop('value')).to.equal('testURL');
  });

  it('should call onSubmit when Shorten is clicked', () => {
    const addItemSpy = spy();
    const wrapper = shallow(<Form onSubmit={addItemSpy}/>);
    wrapper.setState({fullURL: 'fullURL'});
    const addButton = wrapper.find('button');

    addButton.simulate('click');

    expect(addItemSpy.calledOnce).to.equal(true);
    expect(addItemSpy.calledWith('fullURL')).to.equal(true);
  });
});
