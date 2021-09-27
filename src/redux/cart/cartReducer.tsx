// @ts-nocheck
import * as actionTypes from "./cartTypes";
const INITIAL_STATE = {
  items: {},
  total: 0,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const items = state.items;
      const { id } = action.payload;
      if (items[id]) {
        items[id].quantity += 1;
      } else {
        items[id] = { quantity: 1 };
      }
      const total = Object.values(items).reduce(
        (result, cartItem) => result + cartItem.quantity,
        0
      );

      return {
        ...state,
        items,
        total,
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      const items = state.items;
      const { id } = action.payload;
      if ( !items[id]) {        
        items[id] = { quantity: 0 };
      } else if (items[id].quantity && items[id].quantity > 0) {               
        items[id].quantity -= 1;
      } else {
        items[id] = { quantity: 0 };
      }
      if (items[id] <= 0) {
        delete items[id];
      }
      const total = Object.values(items).reduce(
        (result, cartItem) => result + cartItem.quantity,
        0
      );

      return {
        ...state,
        items,
        total,
      };
    }

    default:
      return state;
  }
};

export default shopReducer;
