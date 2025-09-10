const overlay = document.querySelector('.overlay');
const headerDiv = document.querySelector('.header-div');
const projectDiv = document.querySelector('.project-info-div');
const projects = document.querySelectorAll(".js-project-img"); 
const popupHeading = document.querySelector('.popup-heading');

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
})

//Make the Project info block disappear when the header div is clicked
headerDiv.addEventListener('click', () => {
    projectDiv.style.display = 'none'; // hide the project div
    overlay.style.display = 'none'; // hide overlay as well
});

//Make the Project info block disappear when the overlay div is clicked
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

//To display the text on the popup depending on which project is clicked
projects.forEach(img => {
  img.addEventListener("click", () => {
    popupHeading.textContent = img.dataset.title;
    popupHeading.style.display = "flex";
  });
});