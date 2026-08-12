import { experiencesData } from "./js/experiences/experiencesData.js";
import { experienceTemplate } from "./js/experiences/experienceTemplate.js";

import { projectsData } from "./js/projects/projectsData.js";
import { projectTemplate } from "./js/projects/projectTemplate.js";

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


function renderProjects() {
    const container = document.querySelector("#projects-list");

    if (!container) return;
    container.innerHTML = projectsData
        .map(project => projectTemplate(project))
        .join("");
}

function renderExperiences() {
    const container = document.querySelector("#experiences-list");
    if (!container) return;
    container.innerHTML = experiencesData
        .map(experience => experienceTemplate(experience))
        .join("");
}


renderProjects();
renderExperiences();





