export const addCredit = credit => {
    return (dispatch) => {
        dispatch({type: "ADD_CREDIT"})
        fetch('/credits', {
            method: 'POST',
            body: JSON.stringify(credit),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(credit => dispatch({type: "PLAYBILL_ADDED", payload: credit}))
    }
}