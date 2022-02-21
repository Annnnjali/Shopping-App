import axios from "axios";
import { call, put} from 'redux-saga/effects';
import { ActionTypes } from "../constants/productConstant";

function* fetchallCategory(action) {
    try {
        const {data} = yield call(axios.get, `https://fakestoreapi.com/products/category/${action.payload.category}`);
        yield put({type: ActionTypes.SET_CATEGORY_PRODUCT, productData: data});
    } catch (e) {
        console.log.apply(e.message);
    }
}
export default fetchallCategory;