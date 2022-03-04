import { ActionTypes } from "../constants/productConstant";

export const productsDetailsInitialState = {
    productDetails: [],
    isFetching: false,
    pageNumber: 1,
};

const productsDetailsReducer = (state = productsDetailsInitialState, action) => {
    switch (action.type) {
        case ActionTypes.IS_FETCHING:
            return {...state, isFetching: true};
        case ActionTypes.SET_PRODUCTS_DETAILS:
            return {...state, productDetails: action.productData, isFetching: false};
        default:
            return state;
    }
};

export default productsDetailsReducer;