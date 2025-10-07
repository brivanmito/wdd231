const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

//Toggle the show class off an on
navButton.addEventListener('click',() => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
})


const links = document.querySelectorAll('.navigation a');

links.forEach(link => {
    if (link.href === window.location.href) {
        link.parentElement.classList.add('current');
    } else {
        link.parentElement.classList.remove('current'); // opcional para limpiar
    }
});
