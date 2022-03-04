import {ActionTypes} from '../constants/productConstant';

export const authState = {
  isLogin: false,
  userDetails: {},
  isRegistered: false,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {...state, userDetails: action.productData, isLogin: true};

    case ActionTypes.REGISTER_USER_SUCCESS:
      return {...state, isRegistered:true};

    case ActionTypes.LOGOUT:
      return {...state, userDetails: {}, isLogin: false , isRegistered: false};

    default:
      return state;
  }
};

export default authReducer;
