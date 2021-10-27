export default function rateReducer(state = new Map(), action) {
    switch (action.type) {
        case 'addRate':
            state.set(action.payload.title, action.payload)
            saveInLocalStorage()
            return state
        case 'loadRateLocalStorage':
            if(localStorage.rate) {
                state = new Map(JSON.parse(localStorage.rate));
            }
            return state
        default:
            return state
    }
    function saveInLocalStorage(){
        localStorage.rate = JSON.stringify(Array.from(state.entries()));
    }
}
