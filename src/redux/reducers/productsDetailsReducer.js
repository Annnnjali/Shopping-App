import { ActionTypes } from "../constants/productConstant";

export const productsDetailsInitialState = {};

const productsDetailsReducer = (state = productsDetailsInitialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS_DETAILS:
            return action.productData;
        default:
            return state;
    }
};

export default productsDetailsReducer;