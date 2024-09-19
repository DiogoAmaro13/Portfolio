const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

const scrollRevealOption2 = {
    distance: "50px",
    rotate: {
        x: 0,
        y: 180,
        z: 0
    }
}

ScrollReveal().reveal(`
    .header__content h1, 
    .about__content .section__header`, {
    ...scrollRevealOption,
});
ScrollReveal().reveal(`
    .header__content .section__description, 
    .about__content .section__description`, {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(`
    .header__content .header__btn,
    .about__content .about__btn`, {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(`.header__image`, {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
    duration: 1000
});
ScrollReveal().reveal(`.about__image`, {
    ...scrollRevealOption2,
    delay: 500,
    duration: 1000
});

ScrollReveal().reveal(`.product__card, .article__card`, {
    ...scrollRevealOption,
    interval: 500,
});

//JS TEST
// Function to display the modal
/*function showDescription() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
*/
//==================================================================================================================================================================//
//JS END TEST

// Function to display the modal
function showDescription(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
    // Iterate over each modal
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
