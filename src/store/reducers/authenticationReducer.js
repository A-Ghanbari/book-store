import {suid} from "rand-token";
import Cookies from "js-cookie";

export default function authenticationReducer(state = '', action) {
    switch (action.type) {
        case 'signup':
            return (function load() {
                const {user, pass} = action.payload
                const suid = require('rand-token').suid;
                const myToken = suid(16);
                const token = Cookies.set(`${user}`, `${myToken}`, {expires: 7})
                localStorage.setItem(`authentication`, [`${user}`, `${pass}`, `${token}`])
                return ''
            })()
        case 'login':
            return (function load() {
                const {user, pass} = action.payload
                if (checkAuthentication(user, pass)) {
                    return [user]
                } else {
                   return state
                }
            })()

        case 'logout':
            const {user} = action.payload
            return Cookies.remove(`${user}`)

        default :
            return state
    }
}


function checkAuthentication(loginUser, loginPass) {
    if (localStorage.getItem('authentication')) {
        const [user, pass] = localStorage.getItem('authentication').split(',')
        const token = Cookies.get(`${loginUser}`)
        return (user === loginUser && pass === loginPass && token)
    }
}