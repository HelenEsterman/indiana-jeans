import { setSocioLocation } from "./TransientState.js"

export const LocationChoices = async () =>{
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)
    
    let locationHtml = "<h3>Which type of area do you live in?</h3>"
    for (const location of locations) {
        locationHtml += `<input type="radio" name="location" value="${location.id}"/>${location.label}`
    }
    return locationHtml
}

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSocioLocation(convertedToInteger)
    }
}