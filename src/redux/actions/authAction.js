import {ActionTypes} from "../constants/productConstant";
export const LoginUser = (value) => {
    return {type: ActionTypes.LOGIN_USER, payload: value};
};

export const RegisterUser = (value) => {
    return {type: ActionTypes.REGISTER_USER, payload: value};  
};

export const logOut = () => {
    return {type: ActionTypes.LOGOUT};  
};