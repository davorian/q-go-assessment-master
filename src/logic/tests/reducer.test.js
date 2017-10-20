import reducer, { initialState } from '../reducer';
import { addItem, deleteItem, toggleItem, toggleCompletedVisibility } from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should delete an item on DELETE_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    };
    const mockAction = deleteItem({ id: 1, content: 'first' });
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toEqual(2);
    expect(result.items[0].content).toEqual('second');
  });

  it('should toggle an items completion on TOGGLE_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete:false },
        { id: 2, content: 'second', complete:false },
      ]
    };
    const mockAction = toggleItem(state.items[0]);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[0].complete).toBe(true);
  });

  it('should filter out completed items on TOGGLE_COMPLETED_VISIBILITY with true', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete:false },
        { id: 2, content: 'second', complete:false },
        { id: 3, content: 'third', complete:false },
        { id: 4, content: 'fourth', complete:true },
      ]
    };
    const mockAction = toggleCompletedVisibility(true);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[0].complete).toBe(false);
    expect(result.items[1].complete).toBe(false);
    expect(result.items[2].complete).toBe(false);
  });

});
