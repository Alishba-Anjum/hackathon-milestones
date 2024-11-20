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
    <h2><b> My Resume</b></h2>
    <fieldset>
    <legend>Personal Information</legend>
       <p><b>Name:</b> <span contenteditable = "true" spellcheck="false"> ${name}</span></p>
        <p><b>Email:</b> <span contenteditable = "true" spellcheck="false">  ${email} </span></p>
        <p><b>Phone:</b> <span contenteditable = "true" spellcheck="false">  ${phone} </span></p>
    </fieldset>
        
       
      <fieldset>
        <legend>Education</legend>
        <p> <span contenteditable = "true" spellcheck="false"> ${education} </span></p>
        </fieldset>
        
         <fieldset>
        <legend>Experience</legend>
        <p> <span contenteditable = "true" spellcheck="false"> ${experience} </span></p>
        </fieldset>

        

        <fieldset>
        <legend>Skills</legend>
        <p> <span contenteditable = "true" spellcheck="false"> ${skills} </span></p>
        </fieldset>
    `;

    // Display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The resume display element is missing");
    }
    form.style.display = "none"
});
