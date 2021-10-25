import {suid} from "rand-token";
import Cookies from "js-cookie";

export default function authenticationReducer(state = '', action) {
    switch (action.type) {
        case 'signup':
            return (function load() {
                const {user, pass} = action.payload
                localStorage.setItem(`authentication`, [`${user}`, `${pass}`])
                return ''
            })()
        case 'login':
            return (function load() {
                const {user, pass} = action.payload
                if (checkAuthentication(user, pass)) {
                    const suid = require('rand-token').suid;
                    const myToken = suid(16);
                    Cookies.set(`${user}`, `${myToken}`, {expires: 7})
                    return [user]
                } else {
                    return state
                }
            })()
        case 'logout':
            Cookies.remove(...action.payload)
            return ''
        default :
            return state
    }
}


function checkAuthentication(loginUser, loginPass) {
    if (localStorage.getItem('authentication')) {
        const [user, pass] = localStorage.getItem('authentication').split(',')
        return (user === loginUser && pass === loginPass)
    }
}