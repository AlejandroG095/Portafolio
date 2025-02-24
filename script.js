document.addEventListener("DOMContentLoaded", () => {
    const certifications = [
        {
            titulo: "Ingeniería de Sistemas",
            institucion: "Universidad Distrital Francisco José de Caldas",
            imagen: "/images/logo-udistrital.png",
            link: "#"
        },
        {
            titulo: "Diplomado en Arquitectura de Software y Cloud Computing",
            institucion: "Pontificia Universidad Javeriana Cali",
            imagen: "/images/logo-javeriana.jpg",
            link: "/images/diplomado-javeriana.jpg"
        },
        {
            titulo: "Diplomado en Metodologías Ágiles e Innovación en la Organización",
            institucion: "Universidad de la Sabana",
            imagen: "/images/logo-sabana.png",
            link: "/files/diplomado-sabana.pdf"
        },
        {
            titulo: "Design Thinking (Spanish)",
            institucion: "CertMind",
            imagen: "/images/logo-certmind.png",
            link: "https://certmind.org/platform/public/badgeUser/76e47a73-6f77-42ba-9d58-0a37b2daa6f6"
        },
        {
            titulo: "Scrum Fundamentals (Spanish)",
            institucion: "CertMind",
            imagen: "/images/logo-certmind.png",
            link: "https://certmind.org/platform/public/badgeUser/8e2839ba-0550-460d-a591-7b5cb2712ed4"
        },
        {
            titulo: "Scrum Master Certified",
            institucion: "CertMind",
            imagen: "/images/logo-certmind.png",
            link: "https://certmind.org/platform/public/badgeUser/b424d745-bd71-4c10-800d-8fea64075d59"
        },
        {
            titulo: "FullStack Developer",
            institucion: "Digital House",
            imagen: "/images/logo-dh.png",
            link: "/files/diplomado-dh.pdf"
        },
        {
            titulo: "EF SET English Certificate (B2 Upper Intermediate)",
            institucion: "EF SET",
            imagen: "/images/logo-ef-set.png",
            link: "https://cert.efset.org/en/gP2CGw"
        }
    ];

    const container = document.getElementById("certifications-container");

    certifications.forEach(cert => {
        const card = document.createElement("article");
        card.classList.add("certification-card");

        card.innerHTML = `
            <img class="certification-image" src="${cert.imagen}" alt="${cert.titulo}">
            <h3 class="certification-title">${cert.titulo}</h3>
            <p class="certification-description">${cert.institucion}</p>
            <button class="certification-link" onclick="window.open('${cert.link}', '_blank')">Ver Certificado</button>
        `;

        container.appendChild(card);
    });
});
