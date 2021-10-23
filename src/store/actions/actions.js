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

const authentication = bindActionCreators({
        signup,
        login,
        logout
    },
    store.dispatch
)
export default authentication