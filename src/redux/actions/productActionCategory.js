import { ActionTypes } from "../constants/productConstant";

export const fetchProductsCategory = () => {
    return {type: ActionTypes.FETCH_PRODUCTS_CATEGORY};
};