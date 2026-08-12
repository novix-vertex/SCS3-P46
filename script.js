import { certificatesData } from "./js/certificates/certificatesData.js";
import { educationsData } from "./js/educations/educationsData.js";
import { experiencesData } from "./js/experiences/experiencesData.js";
import { primaryExpertiseData, supportingExpertiseData, technicalExpertiseData } from "./js/expertises/expertisesData.js";
import { projectsData } from "./js/projects/projectsData.js";
import { technicalData } from "./js/technical/technicalData.js";
import { workflowData } from "./js/workflow/workflowData.js";
import { aiToolsData, aiTopicsData, aiUsesTabsData } from "./js/ai/aiData.js";
import { contactsData } from "./js/contacts/contactsData.js";

import { certificateTemplate } from "./js/certificates/certificateTemplate.js";
import { educationTemplate } from "./js/educations/educationTemplate.js";
import { experienceTemplate } from "./js/experiences/experienceTemplate.js";
import { expertiseTemplate } from "./js/expertises/expertiseTemplate.js";
import { projectTemplate } from "./js/projects/projectTemplate.js";
import { technicalTemplate } from "./js/technical/technicalTemplate.js";
import { workflowTemplate } from "./js/workflow/workflowTemplate.js";
import { aiToolsTemplate, aiTopicTemplate, aiUsesTabsTemplate } from "./js/ai/aiTemplate.js";
import { contactTemplate } from "./js/contacts/contactTemplate.js";

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function renderData(selector, data, template) {
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = data
        .map(item => template(item))
        .join("");
}

renderData("#primary-expertise-tags", primaryExpertiseData, expertiseTemplate);
renderData("#supporting-expertise-tags", supportingExpertiseData, expertiseTemplate);
renderData("#technical-expertise-tags", technicalExpertiseData, expertiseTemplate);
renderData("#projects-list", projectsData, projectTemplate);
renderData("#experiences-list", experiencesData, experienceTemplate);
renderData("#workflow-grid", workflowData, workflowTemplate);
renderData("#educations-list", educationsData, educationTemplate);
renderData("#technical-grid", technicalData, technicalTemplate);
renderData("#certificates-grid", certificatesData, certificateTemplate);
renderData("#ai-topics", aiTopicsData, aiTopicTemplate);
renderData("#ai-tools", aiToolsData, aiToolsTemplate);
renderData("#ai-tabs", aiUsesTabsData, aiUsesTabsTemplate);
renderData("#contact-links", contactsData, contactTemplate);



gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=0.3");

gsap.fromTo(".process-item", {
    opacity: 0,
    x: 40
}, {
    opacity: 1,
    x: 0,
    duration: 0.7,
    delay: 0.8,
    ease: "expo.out",
    stagger: 0.2
});

