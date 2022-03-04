import {ActionTypes} from '../constants/productConstant';

export const authState = {
  isLogin: false,
  userDetails: {},
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {...state, userDetails: action.productData, isLogin: true};

    case ActionTypes.REGISTER_USER:
      return {...state, userDetails: action.productData};
    default:
      return state;
  }
};

export default authReducer;
