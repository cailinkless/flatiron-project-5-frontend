// const creditReducer = (state={credits: [], c_loading: false}, action) => {

//     switch(action.type) {
//         case "LOADING_CREDITS":
//             return {
//                 ...state,
//                 c_loading: true
//             }

//         case "CREDITS_LOADED":
//             return {
//                 ...state,
//                 credits: action.payload,
//                 c_loading:false
//             }

//         case "CREDIT_ADDED":
//             const creditsPlus = [...state.credits, action.payload]
//             return {
//                 ...state,
//                 credits: creditsPlus,
//                 c_loading: false
//             }

//         case "CREDIT_DELETED":
//             const creditsMinus = [...state.credits.filter(c => c.id != action.payload)]
//             return {
//                 ...state,
//                 credits: creditsMinus,
//                 c_loading: false
//             }

//         case "CREDIT_UPDATED": 
//             debugger
//             const updatedCredits = [...state.credits.filter(c => c.id != action.payload.id), action.payload]
//             return {
//                 ...state,
//                 credits: updatedCredits,
//                 c_loading: false
//             }
            
//         default: 
//             return state
//     }

// }

// export default creditReducer;