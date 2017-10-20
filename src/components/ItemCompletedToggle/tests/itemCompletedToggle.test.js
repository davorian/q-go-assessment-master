import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemCompletedToggle } from '../index';
import { ItemsList } from './../../ItemsList/index';
import { TOGGLE_COMPLETED_VISIBILITY } from './../../../logic/constants'

const defaultProps = {
  completedHidden:false,
  onToggleVisibility  : (content) => {
                          return {type:TOGGLE_COMPLETED_VISIBILITY, content};
                        },
  hiddenText:'Hide'

};
/*
describe('ItemCompletedToggle', () => {
  it('renders without crashing', () => {
    shallow(<ItemCompletedToggle {...defaultProps} />);
  });

  it('should show all the items', () => {
    const renderedToggle = shallow(<ItemCompletedToggle {...defaultProps} />);
    const items = [{ id: 1, content: 'Test 1', completed:false}, { id: 2, content: 'Test 2', completed:true}, { id: 3, content: 'Test 3', completed:false}];
    const renderedItem = mount(<ItemsList items={items} />);
    renderedToggle.find('.completed-item-button-toggle').simulate('click');
    expect(renderedItem.find('#todos')).toHaveLength(3);
  });

it('should hide the completed items', () => {
  const renderedToggle = shallow(<ItemCompletedToggle {...defaultProps} />);
  const items = [{ id: 1, content: 'Test 1', completed:true }, { id: 2, content: 'Test 2', completed:false}, { id: 3, content: 'Test 3', completed:true}];
  const renderedItem = mount(<ItemsList items={items} />);
  renderedToggle.find('.completed-item-button-toggle').simulate('click');
  expect(renderedItem.find('#todos')).toHaveLength(2);
});*/


});
