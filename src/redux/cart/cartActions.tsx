import * as actionTypes from "./cartTypes";

export const addToCart = (itemID: number) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,      
    },
  };
};

export const removeFromCart = (itemID: undefined) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

