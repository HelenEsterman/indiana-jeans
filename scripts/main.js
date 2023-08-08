import { OwnsJeansChoices } from "./OwnsJeans.js"
import { LocationChoices } from "./UrbanDweller.js"

const mainContainer = document.querySelector(".container")

const render = async () => {
    const jeanOwnershipHtml = OwnsJeansChoices()
    const socioLocationHtml = await LocationChoices()

    mainContainer.innerHTML = `${jeanOwnershipHtml} ${socioLocationHtml}`
} 

render()