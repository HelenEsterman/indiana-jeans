import { OwnsJeansChoices } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmissions.js"
import { SubmissionList } from "./Submissions.js"
import { LocationChoices } from "./UrbanDweller.js"

const mainContainer = document.querySelector(".container")

const render = async () => {
    const jeanOwnershipHtml = OwnsJeansChoices()
    const socioLocationHtml = await LocationChoices()
    const saveButtonHtml = saveSubmission()
    const submissionsHtml = await SubmissionList()

    mainContainer.innerHTML = 
            `${jeanOwnershipHtml} 
            ${socioLocationHtml}
            <p>${saveButtonHtml}</p>
            ${submissionsHtml}`
            
} 

document.addEventListener("newSubmissionCreated", render)

render()