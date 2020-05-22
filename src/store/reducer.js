import * as actions from "./actions";

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
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
      };
    default:
      return state;
  }
};
