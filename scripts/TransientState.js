// Set up the transient state data structure and provide initial valuess
const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (selectedChoice) => {
    transientState.ownsBlueJeans = selectedChoice
    console.log(transientState)
}

export const setSocioLocation = (selectedChoice) => {
    transientState.socioLocationId = selectedChoice
    console.log(transientState)
}



// Function to convert transient state to permanent state