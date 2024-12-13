function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleJob(container) {
    container.classList.toggle("expanded");
    // reset other containers if only one should be expanded at a time
    document.querySelectorAll('.job-container').forEach(job => {
        if (job !== container) {
            job.classList.remove('expanded');
        }
    });
}