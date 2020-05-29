import * as types from "../actions/types";

const initialState = {
  ingredients: {
    fish: { quantity: 0, price: 180, label: "Oysters" },
    crab: { quantity: 0, price: 200, label: "Crab" },
    salmon: { quantity: 0, price: 180, label: "Salmon" },
    lobster: { quantity: 0, price: 150, label: "Lobster" },
    shrimp: { quantity: 0, price: 170, label: "Shrimp" },
    cavior: { quantity: 0, price: 190, label: "Soup" },
  },
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity + 1,
          },
        },
        price: state.price + state.ingredients[action.ingredient].price,
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity - 1,
          },
        },
        price: state.price - state.ingredients[action.ingredient].price,
      };
    default:
      return state;
  }
};
