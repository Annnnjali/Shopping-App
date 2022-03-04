import { ActionTypes } from "../constants/productConstant";

export const favProducts = {
    favoriteProducts: [],
};

const favReducer = (state = favProducts, action) => {
    switch (action.type) {
        case ActionTypes.LIKED:
            return {...state, favoriteProducts: [...state.favoriteProducts, action.payload]};
        default:
            return state;
    }
};

export default favReducer;