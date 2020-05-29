import * as types from "../actions/types";

const initialState = {
  ingredients: {
    fish: 0,
    crab: 0,
    salmon: 0,
    lobster: 0,
    shrimp: 0,
    cavior: 0,
  },
  price: 100,
};

const PRICES = {
  fish: 150,
  crab: 250,
  salmon: 180,
  lobster: 150,
  shrimp: 170,
  cavior: 200,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + PRICES[action.ingredient],
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - PRICES[action.ingredient],
      };
    default:
      return state;
  }
};
