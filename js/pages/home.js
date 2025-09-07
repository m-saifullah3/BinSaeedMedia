const overlay = document.querySelector('.overlay');
const projectDiv = document.querySelector('.project-info-div');

document.querySelectorAll(".js-project-img").forEach(project => {
    project.addEventListener("click", () => {
        // Makes the Project info block appear on top of other blocks
        projectDiv.style.display = "block";
        overlay.style.display = "block";

        window.scrollTo({
            top: 350,
            behavior: 'smooth' // smooth scroll
        });
    });
});

overlay.addEventListener('click', () => {
    projectDiv.style.display = 'none'; // hide the project div
    overlay.style.display = 'none'; // hide overlay as well
});

//Close when pressing Esc
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelector(".project-info-div").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    }
});