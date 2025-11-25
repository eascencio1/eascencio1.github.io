
const hamburgerBtn = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});


const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    });
});
