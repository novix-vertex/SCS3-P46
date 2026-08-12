export function experienceTemplate(experience) {
  return `
    <article class="experience-item">

      <div class="experience-date">
        ${experience.date}
      </div>

      <div class="experience-content">

        <div class="experience-tabs flex">
          ${experience.tabs.map(tab => `
            <span class="experience-tab">
              ${tab}
            </span>
          `).join("")}
        </div>

        <h3 class="experience-role">
          ${experience.role}
        </h3>

        <div class="experience-details">
          <div class="experience-detail responsibilities">
            <h4>KEY POINTS</h4>

            <ul class="flex">
              ${experience.keyPoints.map(point => `
                <li>${point}</li>
              `).join("")}
            </ul>
          </div>
        </div>

      </div>

    </article>
  `;
}