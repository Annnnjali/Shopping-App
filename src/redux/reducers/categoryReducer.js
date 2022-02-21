import { ActionTypes } from "../constants/productConstant";

export const categoryInitialState = [];

const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CATEGORY_PRODUCT:
            return action.productData;
        default:
            return state;
    }
};

export default categoryReducer;