import axios from "axios";
import { call, put} from 'redux-saga/effects';
import { ActionTypes } from "../constants/productConstant";

function* fetchallProducts() {
    try {
        yield put ({type: ActionTypes.IS_FETCHING});
        const {data} = yield call(axios.get, 'https://fakestoreapi.com/products');
        yield put({type: ActionTypes.SET_PRODUCTS, productData: data});
    } catch (e) {
        console.log.apply(e.message);
    }
}
export default fetchallProducts;