export function reducer(state, action){
    switch(action.type){
        case "SET_SELECTED_CİTY":
        state.selectedCity = action.city
        return{...state}

        case "SET_RESLİST":
            state.resList = action.resList
            return{...state}

        default:
            return{state}
    }
}