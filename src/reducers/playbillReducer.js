const playbillReducer = (state={playbills: [], loading: false}, action) => {

    switch(action.type) {
        case "LOADING_PLAYBILLS":
            return {
                ...state,
                loading: true
            }

        case "PLAYBILLS_LOADED":
            return {
                ...state,
                playbills: action.payload,
                loading:false
            }

        case "ADD_PLAYBILL":
            return {
                ...state,
                loading: true
            }
            
        case "PLAYBILL_ADDED":
            return {
                ...state,
                playbills: [...state.playbills, action.payload],
                loading: false
            }

        case "DELETE_PLAYBILL":
            return {
                ...state,
                loading: true
            }

        case "PLAYBILL_DELETED":
            return {
                ...state,
                playbills: [...state.playbills.filter(pb => pb.id != action.payload)],
                loading: false
            }

        case "UPDATE_PLAYBILL":
            return {
                ...state,
                loading: true
            }

        case "PLAYBILL_UPDATED":
            return {
                ...state,
                playbills: [...state.playbills, action.payload],
                loading: false
            }

        case "DELETE_PLAYBILLCREDIT":
            return {
                ...state,
                loading: true
            }
    
        case "PLAYBILLCREDIT_DELETED":
            // // const playbill = state.playbill.find(pb => pb.id === action.payload.playbill_id)
            // const newCredits = playbill.credits.filter(c => c.id != action.payload.id)
            debugger
            return {
                ...state,
                playbills: [...state.playbills],
                loading: false
            }

        default: 
            return state
    }

}

export default playbillReducer;