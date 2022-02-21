import axios from "axios";
import { call, put} from 'redux-saga/effects';
import { ActionTypes } from "../constants/productConstant";

function* fetchallProductsCategory() {
    try {
        const {data} = yield call(axios.get, 'https://fakestoreapi.com/products/categories');
        yield put({type: ActionTypes.SET_PRODUCTS_CATEGORY, productData: data});
    } catch (e) {
        console.log.apply(e.message);
    }
}
export default fetchallProductsCategory;