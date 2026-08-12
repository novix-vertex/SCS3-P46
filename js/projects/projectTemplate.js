export function projectTemplate(project) {
    return `<article class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <span class="project-number">
                    ${project.projectNumber}
                </span>
            </div>
            <div class="project-content">
                <h3 class="project-title">
                    ${project.title}
                </h3>
                <div class="project-objective">
                    <span class="project-label">OBJECTIVE</span>
                    <p>${project.details.objective}</p>
                </div>
                <div class="project-technologies">
                    <span class="project-label">
                        TECHNOLOGIES
                    </span>
                    <div class="technology-list">
                        ${project.technologies
                            .map(technology => `<span class="technology">${technology}</span>`)
                            .join("")}
                    </div>
                </div>
            </div>
        </article>`;
}