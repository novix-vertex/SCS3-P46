export function projectTemplate(project) {
    return `
        <article class="project">

            <div class="project-main">

                <div class="project-number">
                    ${project.projectNumber}
                </div>

                <h3 class="project-title">
                    ${project.title}
                </h3>

                <div class="project-objective">
                    <h4>OBJECTIVE</h4>
                    <p>${project.details.objective}</p>
                </div>

                <div class="project-technologies">
                    <span>TECHNOLOGIES</span>
                    <p>${project.technologies.join(" · ")}</p>
                </div>

            </div>

            <div class="project-side">

                <div
                    class="project-visual"
                    style="background-image: url('${project.image}')">
                </div>

            </div>

        </article>
    `;
}