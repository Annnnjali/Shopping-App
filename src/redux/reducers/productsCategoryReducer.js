import { ActionTypes } from "../constants/productConstant";

export const productsCategoryInitialState = {};

const productsCategoryReducer = (state = productsCategoryInitialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS_CATEGORY:
            return action.productData;
        default:
            return state;
    }
};

export default productsCategoryReducer;