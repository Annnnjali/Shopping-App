import axios from "axios";
import { call, put} from 'redux-saga/effects';
import { ActionTypes } from "../constants/productConstant";

function* fetchallProductsDetails(action) {
    try {
        yield put ({type: ActionTypes.IS_FETCHING});
        const {data} = yield call(axios.get, `https://fakestoreapi.com/products/${action.payload.productID}`);
        yield put({type: ActionTypes.SET_PRODUCTS_DETAILS, productData: data});
    } catch (e) {
        console.log.apply(e.message);
    }
}
export default fetchallProductsDetails;