import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {ActionTypes} from '../constants/productConstant';

function* loginSaga(action) {
  try {
    const {data} = yield call(
      axios.post,
      'https://userauthenticationnode.herokuapp.com/api/users/login',
      action.payload
    );
    yield put({type: ActionTypes.LOGIN_USER_SUCCESS, productData: data});
  } catch (e) {
    console.log('ERROR', e.message);
  }
}

function* registerSaga(action) {
  try {
    const {data} = yield call(axios.post, 'https://userauthenticationnode.herokuapp.com/api/users/', action.payload);
    yield put({type: ActionTypes.REGISTER_USER_SUCCESS, productData: data});
  } catch (e) {
    console.log(e.message);
  }
}

export {loginSaga, registerSaga};
