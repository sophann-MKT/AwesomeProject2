import {ADD_TO_CART, REMOVE_FROM_CART} from './actions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartReducer;
