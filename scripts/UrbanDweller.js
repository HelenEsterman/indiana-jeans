export const LocationChoices = async () =>{
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let locationHtml = "<h3>Which type of area do you live in?</h3>"
    for (const location of locations) {
        locationHtml += `<input type="radio" name="location" value="${location.id}"/>${location.label}`
    }
    return locationHtml
}