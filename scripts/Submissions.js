export const SubmissionList = async () => {
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();

  // let submissionHtml = ""
  // Iterate the submissions and create some <section> representations
  const submissionArray = submissions.map((submission) => {
    return `<section id="submissions">
            <div>Owns Jeans? ${submission.ownsBlueJeans}</div> 
            <div>Area type foreign key? ${submission.socioLocationId}</div>
            </section>`;
  });
  const submissionHtml = submissionArray.join(" ");
  // Return the HTML string
  return submissionHtml;
};
