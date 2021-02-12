// //try going through playbill first
// export const addCredit = (credit, playbillId) => { // takes in new Credit as a JavaScript object
//     return (dispatch) => {
//         dispatch({type: "ADD_CREDIT"}) // sets loading to true
//         fetch(`/playbills/${playbillId}/credits`, { // makes call to backend API
//             method: 'POST', // signifies that the call will be adding new object to the API
//             body: JSON.stringify(credit), // converts the Credit from a JS Object to a JSON string
//             headers: {
//                 'Content-Type': 'application/json' // marks content type for informational purposes
//             }
//         })
//         .then(res => res.json()) // parses the response to JSON
//         .then(credit => dispatch({type: "CREDIT_ADDED", payload: credit})) // adds Credit to the global state, sets loading to false
//     }
// }

// //try going through playbill first
// export const deleteCredit = creditId => { // takes in the id number of a specific credit
//     return (dispatch) => {
//         dispatch({type: "DELETE_CREDIT"}) // sets loading to true
//         fetch(`/credits/${creditId}`, { // makes call to backend API
//             method: 'DELETE' // signifies that call will be deleting a credit record from the database
//             })
//         .then( () => dispatch({type: "CREDIT_DELETED", payload: creditId})) // updates global state to disinclude deleted credit, sets loading to false
//     }
// }

// //try going through playbill first
// export const updateCredit = credit => { // takes in the id number of a specific credit
//     return (dispatch) => {
//         dispatch({type: "UPDATE_CREDIT"}) // sets loading to true
//         fetch(`/credits/${credit.id}`, { // makes call to backend API
//             method: 'PATCH', // signifies that call will be updating a Credit record in the database
//             body: JSON.stringify(credit), // converts Credit from JS Object to a JSON string
//             headers: {
//                 'Content-Type': 'application/json' // marks content type for informational purposes
//             }
//         })
//         .then( () => dispatch({type: "CREDIT_UPDATED", payload: credit})) // updates global state with the new version of the credit, sets loading to false
//     }
// }