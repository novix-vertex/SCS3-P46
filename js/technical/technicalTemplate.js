export function technicalTemplate(technical) {
    return `<div class="technical-card">
    <span class="text-muted technical-card-label">
      ${technical.label}
    </span>
    <p>${technical.skills.join(" · ")}</p>
  </div>
 `;
}