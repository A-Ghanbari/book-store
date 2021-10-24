export default function cartReducer(state =new Map(), action) {
    switch (action.type) {
        case 'addCart':
            state.set(action.payload.title, action.payload)
            return  state
        case 'removeCart':
            const books =[ ...state.values() ];
            return  books.filter(book => book.title !== action.payload.title)
        default:
            return state
    }
}
