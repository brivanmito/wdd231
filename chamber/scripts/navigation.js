const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

//Toggle the show class off an on
navButton.addEventListener('click',() => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
})


