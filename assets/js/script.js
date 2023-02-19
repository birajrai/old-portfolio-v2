console.log('I Lost Everything!');
const toggleNav = document.querySelector('.toggle-nav');
const nav = document.querySelector('nav ul');

toggleNav.addEventListener('click', function () {
    nav.classList.toggle('show');
});
