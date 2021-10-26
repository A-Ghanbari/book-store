import {combineReducers} from "redux";
import authenticationReducer from "./authenticationReducer";
import cartReducer from "./cartReducer";
import bookMarkReducer from "./bookMarkReducer";

const rootReducer = combineReducers({
    user: authenticationReducer,
    cart: cartReducer,
    bookMark: bookMarkReducer
})
export default rootReducer