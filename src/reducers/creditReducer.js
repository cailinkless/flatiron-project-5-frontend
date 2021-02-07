const creditReducer = (state={credits: [], loading: false}, action) => {

    switch(action.type) {

        case "LOADING_CREDITS":
            return {
                ...state,
                loading: true
            }

        case "CREDITS_LOADED":
            return {
                ...state,
                credits: action.payload,
                loading: false
            }

        case "ADD_CREDIT":
            return {
                ...state,
                loading: true
            }
            
        case "CREDIT_ADDED":
            return {
                ...state,
                credits: [...state.credits, action.payload],
                loading: false
            }

        case "DELETE_CREDIT":
            return {
                ...state,
                loading: true
            }
    
        case "CREDIT_DELETED":
            debugger
            return {
                ...state,
                credits: [...state.credits.filter(c => c.id != action.payload)],
                loading: false
            }

        default: 
            return state
    }

}

export default creditReducer;