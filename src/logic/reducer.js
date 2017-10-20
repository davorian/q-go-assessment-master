import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_COMPLETED_VISIBILITY } from './constants';

export const initialState = {
  completedHidden:false,
  hiddenText:'Hide',
  items: [
    { id: 1, content: 'Call mum', complete:false },
    { id: 2, content: 'Buy cat food', complete:false },
    { id: 3, content: 'Water the plants', complete:false }
  ],
  originalItems:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content
      };

      return {
        ...state,
        items: [...state.items, newItem]
      };

    case DELETE_ITEM:
      const removeIndex = state.items.map(function(item) { return item.id; }).indexOf(action.content.id);
      state.items.splice(removeIndex, 1);
      return {
        ...state,
        items: state.items.slice(0,state.items.length)
      };

    case TOGGLE_ITEM:
      const toggledItem = {
        id: action.content.id,
        content: action.content.content,
        complete: !action.content.complete,
      };

      const toggleIndex = state.items.map(function(item) { return item.id; }).indexOf(action.content.id);
      state.items.splice(toggleIndex, 1, toggledItem);
      return {
        ...state,
        items: state.items.slice(0,state.items.length)
      };

    case TOGGLE_COMPLETED_VISIBILITY:
        console.log('action.content ' + action.content);
       const filtered = action.content  ?  state.items.filter(item => !item.complete) : state.originalItems;
      return {
        ...state,
        hiddenText: action.content ? 'Show':'Hide',
        completedHidden: action.content,
        originalItems : state.items.slice(0),
        items: filtered
      };

    default:
      return state;
  }
};

export default reducer;
