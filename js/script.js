const hamburger__menu = document.getElementById('hamburger__menu');
const navlinks = document.getElementsByClassName('nav-links')[0];
console.log(navlinks);


hamburger__menu.addEventListener('click' , () => {
    navlinks.classList.toggle('active')
})
console.log(hamburger__menu);
