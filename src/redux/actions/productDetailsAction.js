import { ActionTypes } from "../constants/productConstant";

export const fetchProductsDetails = (productID) => {
    return {type: ActionTypes.FETCH_PRODUCTS_DETAILS, payload: {productID: productID}};
};