// Social Media Bar Component
export const getSocialsContent = () => `
    <div class=\"socials-bar-container\">
        <div class=\"socials-section\">
            <a href=\"https://facebook.com/eastercompany\" aria-label=\"Facebook\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"bx bxl-facebook-square\"></i></a>
            <a href=\"https://linkedin.com/company/72223947\" aria-label=\"LinkedIn\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"bx bxl-linkedin\"></i></a>
            <a href=\"https://instagram.com/eastercompany\" aria-label=\"Instagram\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"bx bxl-instagram-alt\"></i></a>
            <a href=\"https://x.com/eastercompany\" aria-label=\"X\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"bx bxl-twitter\"></i></a>
            <a href=\"https://github.com/eastercompany\" aria-label=\"GitHub\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"bx bxl-github\"></i></a>
            <a href=\"https://youtube.com/@eastercompany\" aria-label=\"YouTube\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"bx bxl-youtube\"></i></a>
        </div>
    </div>
`;

export function injectSocialsBar() {
    const existing = document.getElementById('main-socials-bar');
    if (existing) return;

    const footer = document.createElement('footer');
    footer.id = 'main-socials-bar';
    footer.innerHTML = getSocialsContent();
    document.body.appendChild(footer);
}
