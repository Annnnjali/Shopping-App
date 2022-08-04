import {ActionTypes} from '../constants/productConstant';

export const addCartProducts = {
  cartProducts: [],
};

const addCartReducer = (state = addCartProducts, action) => {
  switch (action.type) {
    case ActionTypes.ADDCART:
      return {...state, cartProducts: [...state.cartProducts, action.payload]};

    case ActionTypes.INCREMENT:
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          state.cartProducts.find(item => item.id === action.payload)
          .quantity + 1,
        ],
      };

      case ActionTypes.INCREMENT:
        return {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            state.cartProducts.find(item => item.id === action.payload)
            .quantity + 1,
          ],
        };

    default:
      return state;
  }
};

export default addCartReducer;
