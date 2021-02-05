const playbillReducer = (state={playbills: [], loading: false, selectedPlaybill: null}, action) => {

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

        case "GET_PLAYBILL":
            return {
                ...state,
                loading: true
            }

        case "PLAYBILL_LOADED":
            return {
                ...state,
                selectedPlaybill: state.playbills.find(pb => pb.id == action.payload),
                loading: false
            }

        default: 
            return state
    }

}

export default playbillReducer;