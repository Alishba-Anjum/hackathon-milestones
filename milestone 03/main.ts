const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Collect values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Generate resume
    const resumeHTML = `
    <h2><b> MY Resume</b></h2>
    <fieldset>
    <legend>Personal Information</legend>
       <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
    </fieldset>
        
       
      <fieldset>
        <legend>Education</legend>
        <p>${education}</p>
        </fieldset>
        
         <fieldset>
        <legend>Experience</legend>
        <p>${experience}</p>
        </fieldset>

        

        <fieldset>
        <legend>Skills</legend>
        <p>${skills}</p>
        </fieldset>
    `;

    // Display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The resume display element is missing");
    }
});
