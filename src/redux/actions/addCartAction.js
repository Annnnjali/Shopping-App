import {ActionTypes} from "../constants/productConstant";
export const fetchAddCart = (item) => {
    return {type: ActionTypes.ADDCART, payload: item};
};

export const addCartIncrement = (item) => {
    return {type: ActionTypes.INCREMENT, payload: item};
};

export const addCartDecrement = (item) => {
    return {type: ActionTypes.DECREMENT, payload: item};
};