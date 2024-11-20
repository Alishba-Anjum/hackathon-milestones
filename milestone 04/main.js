var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate resume
    var resumeHTML = "\n    <h2><b> My Resume</b></h2>\n    <fieldset>\n    <legend>Personal Information</legend>\n       <p><b>Name:</b> <span contenteditable = \"true\" spellcheck=\"false\"> ".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable = \"true\" spellcheck=\"false\">  ").concat(email, " </span></p>\n        <p><b>Phone:</b> <span contenteditable = \"true\" spellcheck=\"false\">  ").concat(phone, " </span></p>\n    </fieldset>\n        \n       \n      <fieldset>\n        <legend>Education</legend>\n        <p> <span contenteditable = \"true\" spellcheck=\"false\"> ").concat(education, " </span></p>\n        </fieldset>\n        \n         <fieldset>\n        <legend>Experience</legend>\n        <p> <span contenteditable = \"true\" spellcheck=\"false\"> ").concat(experience, " </span></p>\n        </fieldset>\n\n        \n\n        <fieldset>\n        <legend>Skills</legend>\n        <p> <span contenteditable = \"true\" spellcheck=\"false\"> ").concat(skills, " </span></p>\n        </fieldset>\n    ");
    // Display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
    form.style.display = "none";
});
