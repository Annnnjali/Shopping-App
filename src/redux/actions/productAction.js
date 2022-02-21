import { ActionTypes } from "../constants/productConstant";

export const fetchProducts = () => {
    return {type: ActionTypes.FETCH_PRODUCTS};
};