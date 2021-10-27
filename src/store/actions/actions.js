import {bindActionCreators} from "redux";
import store from "../store";

function signup(payload) {
    return {type: 'signup', payload}
}

function login(payload) {
    return {type: 'login', payload}
}

function logout(payload) {
    return {type: 'logout', payload}
}

function addCart(payload) {
    return {type: 'addCart', payload}
}

function removeCart(payload) {
    return {type: 'removeCart', payload}
}

function loadCartLocalStorage() {
    return {type: 'loadCartLocalStorage'}
}

function like(payload) {
    return {type: 'like', payload}
}

function dislike(payload) {
    return {type: 'dislike', payload}
}

function loadBookMarkLocalStorage() {
    return {type: 'loadBookMarkLocalStorage'}
}

function rate(payload) {
    return {type: 'addRate', payload}
}

function loadRateLocalStorage() {
    return {type: 'loadRateLocalStorage'}
}

const authentication = bindActionCreators({
        signup,
        login,
        logout,
        addCart,
        removeCart,
        loadCartLocalStorage,
        like,
        dislike,
        loadBookMarkLocalStorage,
        rate,
        loadRateLocalStorage
    },
    store.dispatch
)
export default authentication