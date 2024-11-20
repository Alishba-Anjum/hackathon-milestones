var skillsBtn = document.getElementById("skills-btn");
var skills = document.getElementById("skills");
skillsBtn.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
