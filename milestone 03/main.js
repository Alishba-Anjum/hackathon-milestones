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
    var resumeHTML = "\n    <h2><b> MY Resume</b></h2>\n    <fieldset>\n    <legend>Personal Information</legend>\n       <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n    </fieldset>\n        \n       \n      <fieldset>\n        <legend>Education</legend>\n        <p>").concat(education, "</p>\n        </fieldset>\n        \n         <fieldset>\n        <legend>Experience</legend>\n        <p>").concat(experience, "</p>\n        </fieldset>\n\n        \n\n        <fieldset>\n        <legend>Skills</legend>\n        <p>").concat(skills, "</p>\n        </fieldset>\n    ");
    // Display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
