import fetchallProducts from './redux/sagas/productSaga';
import fetchProductsDetails from './redux/sagas/productSagaDetails';
import fetchallProductsCategory from './redux/sagas/productCategorySaga';
import fetchallCategory from './redux/sagas/categorySaga';
import {ActionTypes} from './redux/constants/productConstant';
import {takeLatest} from 'redux-saga/effects';
import {loginSaga, registerSaga} from './redux/sagas/authSaga';

export default function* rootSaga() {
  yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchallProducts);
  yield takeLatest(ActionTypes.FETCH_PRODUCTS_DETAILS, fetchProductsDetails);
  yield takeLatest(
    ActionTypes.FETCH_PRODUCTS_CATEGORY,
    fetchallProductsCategory,
  );
  yield takeLatest(ActionTypes.FETCH_CATEGORY_PRODUCT, fetchallCategory);
  yield takeLatest(ActionTypes.LOGIN_USER, loginSaga);
  yield takeLatest(ActionTypes.REGISTER_USER, registerSaga);
}
