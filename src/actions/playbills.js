export const getPlaybills = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PLAYBILLS"})
        fetch('/playbills')
        .then(res => res.json())
        .then(playbills => dispatch({type: "PLAYBILLS_LOADED", payload: playbills}))
    }
}

export const addPlaybill = playbill => {
    return (dispatch) => {
        dispatch({type: "ADD_PLAYBILL"})
        fetch('/playbills', {
            method: 'POST',
            body: JSON.stringify(playbill),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(playbill => dispatch({type: "PLAYBILL_ADDED", payload: playbill}))
    }
}