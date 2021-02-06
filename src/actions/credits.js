// CRUD actions for the Credit model

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