export function certificateTemplate(certificate) {
    return `<a href="#" class="certificate">
            <div class="certificate-number">${certificate.number}</div>

            <div class="certificate-info">
                <h3>${certificate.title}</h3>
                <p>${certificate.provider}</p>
            </div>

            <div class="certificate-meta flex">
                <span>${certificate.category}</span>
                <span>${certificate.year}</span>
            </div>
        </a>`;
}