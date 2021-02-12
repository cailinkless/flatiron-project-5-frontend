// CRUD actions for the Playbill model

export const getPlaybills = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PLAYBILLS"}) // sets loading to true
        fetch('/playbills') // makes call to backend API
        .then(res => res.json()) // parses the response to JSON
        .then(playbills => dispatch({type: "PLAYBILLS_LOADED", payload: playbills})) // adds playbills to the global state, sets loading to false
    }
}

export const addPlaybill = playbill => { // takes in new Playbill as a JavaScript object
    return (dispatch) => {
        dispatch({type: "ADD_PLAYBILL"}) // sets loading to true
        fetch('/playbills', { // makes call to backend API
            method: 'POST', // signifies that the call will be adding new object to the API
            body: JSON.stringify(playbill), // converts the Playbill from a JS Object to a JSON string
            headers: {
                'Content-Type': 'application/json' // marks content type for informational purposes
            }
        })
        .then(res => res.json()) // parses the response to JSON
        .then(playbill => dispatch({type: "PLAYBILL_ADDED", payload: playbill})) // adds playbill to the global state, sets loading to false
    }
}

export const deletePlaybill = playbillId => { // takes in the id number of a specific playbill
    return (dispatch) => {
        dispatch({type: "DELETE_PLAYBILL"}) // sets loading to true
        fetch(`/playbills/${playbillId}`, { // makes call to backend API
            method: 'DELETE' // signifies that call will be deleting a Playbill record from the database
            })
        .then( () => dispatch({type: "PLAYBILL_DELETED", payload: playbillId})) // updates global state to disinclude deleted playbill, sets loading to false
    }
}

export const updatePlaybill = playbill => { // takes in the id number of a specific playbill
    return (dispatch) => {
        dispatch({type: "UPDATE_PLAYBILL"}) // sets loading to true
        fetch(`/playbills/${playbill.id}`, { // makes call to backend API
            method: 'PATCH', // signifies that call will be updating a Playbill record in the database
            body: JSON.stringify(playbill), // converts Playbill from JS Object to a JSON string
            headers: {
                'Content-Type': 'application/json' // marks content type for informational purposes
            }
        })
        .then( () => dispatch({type: "PLAYBILL_UPDATED", payload: playbill})) // updates global state with the new version of the playbill, sets loading to false
    }
}

export const addCredit = (credit, playbillId) => { // takes in new Credit as a JavaScript object, and its playbill id
    return (dispatch) => {
        dispatch({type: "ADD_CREDIT"}) // sets loading to true
        fetch(`/playbills/${playbillId}/credits`, { // makes call to backend API
            method: 'POST', // signifies that the call will be adding new object to the API
            body: JSON.stringify(credit), // converts the Credit from a JS Object to a JSON string
            headers: {
                'Content-Type': 'application/json' // marks content type for informational purposes
            }
        })
        .then(res => res.json()) // parses the response to JSON
        .then(credit => dispatch({type: "CREDIT_ADDED", payload: credit})) // adds Credit to the global state, sets loading to false
    }
}

export const deleteCredit = creditId => { // takes in the id number of a specific credit
    return (dispatch) => {
        dispatch({type: "DELETE_CREDIT"}) // sets loading to true
        fetch(`/credits/${creditId}`, { // makes call to backend API
            method: 'DELETE' // signifies that call will be deleting a credit record from the database
            })
        .then( () => dispatch({type: "CREDIT_DELETED", payload: creditId})) // updates global state to disinclude deleted credit, sets loading to false
    }
}

export const updateCredit = credit => { // takes in the id number of a specific credit
    return (dispatch) => {
        dispatch({type: "UPDATE_CREDIT"}) // sets loading to true
        fetch(`/credits/${credit.id}`, { // makes call to backend API
            method: 'PATCH', // signifies that call will be updating a Credit record in the database
            body: JSON.stringify(credit), // converts Credit from JS Object to a JSON string
            headers: {
                'Content-Type': 'application/json' // marks content type for informational purposes
            }
        })
        .then( () => dispatch({type: "CREDIT_UPDATED", payload: credit})) // updates global state with the new version of the credit, sets loading to false
    }
}