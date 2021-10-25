function bookMarkReducer(state = new Map(), action) {
    switch (action.type) {
        case 'like':
            state.set(action.payload.title, action.payload)
            saveInLocalStorage()
            return state
        case 'dislike':
            state.delete(action.payload.title)
            saveInLocalStorage()
            return state
        case 'loadBookMarkLocalStorage':
            if(localStorage.bookMark){
                state = new Map(JSON.parse(localStorage.bookMark));
            }
            return state
        default:
            return state
    }
    function saveInLocalStorage(){
        localStorage.bookMark = JSON.stringify(Array.from(state.entries()));
    }
}

export default bookMarkReducer