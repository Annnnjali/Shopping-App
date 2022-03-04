import {ActionTypes} from "../constants/productConstant";
export const LoginUser = (value) => {
    return {type: ActionTypes.LOGIN_USER, payload: value};
};