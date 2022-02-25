import { ActionTypes } from "../constants/productConstant";

export const categoryInitialState = {
    categories: [],
    isFetching: false,
    pageNumber: 1
};

const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
        case ActionTypes.IS_FETCHING:
            return {...state, isFetching: true};
        case ActionTypes.SET_CATEGORY_PRODUCT:
            return {...state, categories: action.productData, isFetching: false};
        default:
            return state;
    }
};

export default categoryReducer;