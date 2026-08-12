export function aiTopicTemplate(item) {
    return `<span>${item}</span>`;
}

export function aiToolsTemplate(item) {
    return `<span>| </span>${item}<span> |</span>`;
}

export function aiUsesTabsTemplate(item) {
    return `<button class="text-muted ai-tab">${item}</button>`;
}
