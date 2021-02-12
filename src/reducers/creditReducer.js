const creditReducer = (state={credits: [], c_loading: false}, action) => {

    switch(action.type) {
        case "LOADING_CREDITS":
            return {
                ...state,
                c_loading: true
            }

        case "CREDITS_LOADED":
            return {
                ...state,
                credits: action.payload,
                c_loading:false
            }

        case "DELETE_CREDIT":
            return {
                ...state,
                c_loading: true
            }
    
        case "CREDIT_DELETED":
            return {
                ...state,
                credits: [...state.credits.filter(c => c.id !== parseInt(action.payload))],
                c_loading: false
            }

        case "UPDATE_CREDIT":
            return {
                ...state,
                loading: true
            }
    
        case "CREDIT_UPDATED":
            return {
                ...state,
                credits: [...state.credits.filter(c => c.id !== action.payload.id), action.payload],
                loading: false
            }
            
        default: 
            return state
    }

}

export default creditReducer;