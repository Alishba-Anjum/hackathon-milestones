var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("downloadButton");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect values
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate resume
    var resumeHTML = "\n    <h2><b> My Resume</b></h2>\n    <fieldset>\n    <legend>Personal Information</legend>\n       <p><b>Name:</b> <span contenteditable = \"true\" spellcheck=\"false\"> ".concat(name, "</span></p>\n       <p><b>Email:</b> <span contenteditable = \"true\" spellcheck=\"false\">  ").concat(email, " </span></p>\n       <p><b>Phone:</b> <span contenteditable = \"true\" spellcheck=\"false\">  ").concat(phone, " </span></p>\n    </fieldset>\n        \n       \n    <fieldset>\n        <legend>Education</legend>\n        <p> <span contenteditable = \"true\" spellcheck=\"false\"> ").concat(education, " </span></p>\n        </fieldset>\n        \n   <fieldset>\n        <legend>Experience</legend>\n        <p> <span contenteditable = \"true\" spellcheck=\"false\"> ").concat(experience, " </span></p>\n    </fieldset>\n\n        \n\n    <fieldset>\n        <legend>Skills</legend>\n        <p> <span contenteditable = \"true\" spellcheck=\"false\"> ").concat(skills, " </span></p>\n    </fieldset>\n    ");
    // Display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
    form.style.display = "none";
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window, "?username=").concat(encodeURIComponent(username), "-cv.html");
    // Display the shareable link
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener("click", function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value =
                username;
            document.getElementById("name").value =
                resumeData.name;
            document.getElementById("email").value =
                resumeData.email;
            document.getElementById("phone").value =
                resumeData.phone;
            document.getElementById("education").value =
                resumeData.education;
            document.getElementById("experience").value =
                resumeData.experience;
            document.getElementById("skills").value =
                resumeData.skills;
        }
    }
});
