const skillsBtn = document.getElementById("skills-btn") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;
skillsBtn.addEventListener("click", ()=>{
     if (skills.style.display === "none") {
        skills.style.display = "block"
     }else{
       skills.style.display = "none"
     }
});