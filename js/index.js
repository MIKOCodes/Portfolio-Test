const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll ('.nav__link')

navToggle.addEventListener ('click', () => {
    document.body.classList.toggle('openNav')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('openNav')
    })
})