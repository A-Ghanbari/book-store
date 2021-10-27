import {combineReducers} from "redux";
import authenticationReducer from "./authenticationReducer";
import cartReducer from "./cartReducer";
import bookMarkReducer from "./bookMarkReducer";
import rateReducer from "./rateReducer";

const rootReducer = combineReducers({
    user: authenticationReducer,
    cart: cartReducer,
    bookMark: bookMarkReducer,
    rate: rateReducer
})
export default rootReducer