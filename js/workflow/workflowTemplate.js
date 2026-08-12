export function workflowTemplate(workflow) {
    return `<div class="workflow-card">
    <span class="workflow-number">
      ${workflow.number} — ${workflow.title}
    </span>
    <p>${workflow.description}</p>
  </div>`;
}