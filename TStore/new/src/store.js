// store.js
import { createStore } from 'redux';

const initialState = {
  items: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
