import { combineReducers } from "redux";
import productsReducer from "./redux/reducers/productReducer";
import productsDetailsReducer from "./redux/reducers/productsDetailsReducer";
import productsCategoryReducer from "./redux/reducers/productsCategoryReducer";
import categoryReducer from "./redux/reducers/categoryReducer";
import authReducer from './redux/reducers/authReducer';
import favReducer from "./redux/reducers/favReducer";

const rootReducer = combineReducers({
    products : productsReducer,
    productsDetails : productsDetailsReducer,
    productsCategory : productsCategoryReducer,
    category: categoryReducer,
    auth: authReducer,
    favorite: favReducer,
});

export default rootReducer;