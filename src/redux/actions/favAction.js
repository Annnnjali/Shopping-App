import {ActionTypes} from "../constants/productConstant";
export const fetchFavorites = (item) => {
    return {type: ActionTypes.LIKED, payload: item};
};