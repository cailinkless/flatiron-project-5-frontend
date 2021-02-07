// CRUD actions for the Credit model

export const getCredits = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CREDITS"}) // sets loading to true
        fetch('/credits') // makes call to backend API
        .then(res => res.json()) // parses the response to JSON
        .then(credits => dispatch({type: "CREDITS_LOADED", payload: credits})) // adds credits to the global state, sets loading to false
    }
}

export const addCredit = credit => { // takes in new Credit as a JavaScript object
    return (dispatch) => {
        dispatch({type: "ADD_CREDIT"}) // sets loading to true
        fetch('/credits', { // makes call to the backend API
            method: 'POST', // signifies that the call will be adding new object to the API
            body: JSON.stringify(credit), // converts the Credit from a JS Object to a JSON string
            headers: {
                'Content-Type': 'application/json' // marks content type for informational purposes
            }
        })
        .then(res => res.json()) // parses the response to JSON
        .then(credit => dispatch({type: "PLAYBILL_ADDED", payload: credit})) // adds the returned JSON to the global stat, sets loading to false
    }
}

export const deleteCredit = creditId => { // takes in the id number of a specific credit
    return (dispatch) => {
        dispatch({type: "DELETE_CREDIT"}) // sets loading to true
        fetch(`/credits/${creditId}`, { // makes call to backend API
            method: 'DELETE' // signifies that call will be deleting a Credit record from the database
            })
        .then( () => dispatch({type: "CREDIT_DELETED", payload: creditId})) // updates global state to disinclude deleted credit, sets loading to false
    }
}

export const updateCredit = credit => { // takes in a specific credit as a JS Object
    return (dispatch) => {
        dispatch({type: "UPDATE_CREDIT"}) // sets loading to true
        fetch(`/credits/${credit.id}`, { // makes call to backend API
            method: 'PATCH', // signifies that call will be updating a Credit record in the database
            body: JSON.stringify(credit), // converts Credit from JS Object to a JSON string
            headers: {
                'Content-Type': 'application/json' // marks content type for informational purposes
            }
        })
        .then( () => dispatch({type: "CREDIT_UPDATED", payload: credit})) // updates global state to reflect the changed credit, sets loading to false
    }
}