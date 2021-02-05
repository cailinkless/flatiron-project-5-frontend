const creditReducer = (state={credits: [], loading: false}, action) => {

    switch(action.type) {

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

        default: 
            return state
    }

}

export default creditReducer;