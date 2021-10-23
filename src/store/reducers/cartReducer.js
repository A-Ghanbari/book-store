export default function cartReducer(state =new Map(), action) {
    switch (action.type) {
        case 'addCart':
            state.set(action.payload.title, action.payload)
            return  state
        case 'removeCart':
            return  state.filter(state => state !== action.payload)
        default:
            return state
    }
}
