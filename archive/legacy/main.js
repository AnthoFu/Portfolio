const projects = [
    {
        title: "Anthocito (Bot de Discord)",
        image: "/imagenes/discord-bot.jpg",
        description: "Bot de Discord con diferentes funciones, de entretenimiento, moderación de servidores entre otros.",
        github: "https://github.com/AnthoFu/Anthocito"
    },
    {
        title: "Portafolio personal",
        image: "/imagenes/Anthofu Logo - Blanco.png",
        description: "Portafolio web, todo el codigo que tiene esta pagina.",
        github: "https://github.com/AnthoFu/Portfolio"
    },
    // Agrega más proyectos aquí
];

let currentProject = 0;

function displayProject(index) {
    const project = projects[index];
    document.getElementById("project-title").innerText = project.title;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-description").innerText = project.description;

    const githubButton = document.getElementById("github-button");
    if (project.github) {
        githubButton.style.display = "inline-block";
        githubButton.firstElementChild.href = project.github;
    } else {
        githubButton.style.display = "none";
    }
}

function nextProject() {
    currentProject = (currentProject + 1) % projects.length;
    displayProject(currentProject);
}

function previousProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    displayProject(currentProject);
}




function copyEmail() {
    var emailText = document.getElementById("email-text").innerText;
    navigator.clipboard.writeText(emailText).then(function() {
        alert("Correo electrónico copiado: " + emailText);
    }, function(err) {
        alert("Error al copiar el correo electrónico: ", err);
    });
}



// Inicializa el primer proyecto
displayProject(currentProject);
