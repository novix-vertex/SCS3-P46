export function educationTemplate(education) {
    return `<article class="education-item">
    <div class="text-muted education-year">
      ${education.year}
    </div>

    <div class="education-content">
      <h3>${education.degree}</h3>

      <p class="education-institution">
        ${education.institution}
      </p>

      <p class="education-areas">
        RELEVANT AREAS
        <span>·</span>
        ${education.relevant_areas.join(", ")}
      </p>
    </div>

  </article>
    `;
}