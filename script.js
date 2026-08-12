import { certificatesData } from "./js/certificates/certificatesData.js";
import { certificateTemplate } from "./js/certificates/certificateTemplate.js";
import { experiencesData } from "./js/experiences/experiencesData.js";
import { experienceTemplate } from "./js/experiences/experienceTemplate.js";
import { primaryExpertiseData, supportingExpertiseData, technicalExpertiseData } from "./js/expertises/expertisesData.js";
import { expertiseTemplate } from "./js/expertises/expertiseTemplate.js";

import { projectsData } from "./js/projects/projectsData.js";
import { projectTemplate } from "./js/projects/projectTemplate.js";
import { workflowData } from "./js/workflow/workflowData.js";
import { workflowTemplate } from "./js/workflow/workflowTemplate.js";

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

function renderCertificates() {
    const container = document.querySelector("#certificates-grid");
    if (!container) return;
    container.innerHTML = certificatesData
        .map(certificate => certificateTemplate(certificate))
        .join("");
}


function renderExpertises() {
    const primaryContainer = document.querySelector("#primary-expertise-tags");
    const supportingContainer = document.querySelector("#supporting-expertise-tags");
    const technicalContainer = document.querySelector("#technical-expertise-tags");
    if (!primaryContainer) return;
    if (!supportingContainer) return;
    if (!technicalContainer) return;
    primaryContainer.innerHTML = primaryExpertiseData
        .map(expertise => expertiseTemplate(expertise))
        .join("");
    supportingContainer.innerHTML = supportingExpertiseData
        .map(expertise => expertiseTemplate(expertise))
        .join("");
    technicalContainer.innerHTML = technicalExpertiseData
        .map(expertise => expertiseTemplate(expertise))
        .join("");
}

function renderWorkflow() {
    const container = document.querySelector("#workflow-grid");
    if (!container) return;
    container.innerHTML = workflowData
        .map(workflow => workflowTemplate(workflow))
        .join("");
}

renderProjects();
renderExperiences();
renderCertificates();
renderExpertises();
renderWorkflow();





