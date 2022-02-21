import { ActionTypes } from "../constants/productConstant";

export const fetchCategoryProducts = (category) => {
    return {type: ActionTypes.FETCH_CATEGORY_PRODUCT, payload: {category}};
};