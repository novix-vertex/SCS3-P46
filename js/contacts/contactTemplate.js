export function contactTemplate(contact) {
    return `<a href="${contact.link}" target="blank" class="flex contact-link">
                        <span>${contact.label}</span>
                        <span class="flex contact-link-value">${contact.value}</span>
                    </a>
    `;
}