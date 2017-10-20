import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_COMPLETED_VISIBILITY } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = (content) => {
  return {type:DELETE_ITEM, content};
};

export const toggleItem = (content) => {
  return {type:TOGGLE_ITEM, content};
};

export const toggleCompletedVisibility = (content) => {
  return {type:TOGGLE_COMPLETED_VISIBILITY, content};
};




