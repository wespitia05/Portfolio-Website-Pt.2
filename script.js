function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleJob() {
    const job = document.querySelector(".experience-containers");
    job.classList.toggle("open");
}