import { combineReducers } from "redux";
import productsReducer from "./redux/reducers/productReducer";
import productsDetailsReducer from "./redux/reducers/productsDetailsReducer";
import productsCategoryReducer from "./redux/reducers/productsCategoryReducer";
import categoryReducer from "./redux/reducers/categoryReducer";

const rootReducer = combineReducers({
    products : productsReducer,
    productsDetails : productsDetailsReducer,
    productsCategory : productsCategoryReducer,
    category: categoryReducer,
});

export default rootReducer;