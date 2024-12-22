function menuIcon() {
    const menu = document.querySelector(".nav-links");
    const icon = document.querySelector("#menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleJob(container) {
    container.classList.toggle("expanded");
    // reset other containers if only one should be expanded at a time
    document.querySelectorAll('.job-1-content, .job-2-content, .job-3-content').forEach(job => {
        if (job !== container) {
            job.classList.remove('expanded');
        }
    });
}

