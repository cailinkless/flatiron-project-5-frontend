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
                playbills: [...state.playbills.filter(pb => pb.id !== parseInt(action.payload))],
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
                playbills: [...state.playbills.filter(pb => pb.id !== action.payload.id), action.payload],
                loading: false
            }

        case "ADD_CREDIT":
            return {
                ...state,
                loading: true
                }
                    
        case "CREDIT_ADDED":
            // playbill
            // const updateMe = state.playbills.filter(pb => pb.id === action.payload.playbill.playbill_id)[0]
            const updatedPlaybills = state.playbills.map(playbill => {
                if (playbill.id === action.payload.playbill.playbill_id) {
                    return {
                        ...playbill,
                        credits: [...playbill.credits, action.payload]
                    }
                } else {
                    return playbill
                }
            })
            debugger
            return {
                ...state,
                playbills: updatedPlaybills,
                loading: false
            }

        // case "CREDIT_ADDED":
        //     // playbill
        //     debugger
        //     return {
        //         ...state,
        //         playbills: [...state.playbills.filter(pb => pb.id !== action.payload.id), action.payload], // assumes payload of "playbill"
        //         loading: false
        //     }
            
        default: 
            return state
    }

}

export default playbillReducer;