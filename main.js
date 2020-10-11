const navBar = document.querySelector('.nav-bar-container');
const menuBtn = document.querySelector('.icon');
const mobileMenu = document.querySelector('.menu-mobile');
const logo = document.querySelector('.logo');

// Change Navigation Bar On Scroll
window.addEventListener('scroll', () => {
	pageYOffset > 25
		? navBar.classList.add('scroll')
		: navBar.classList.remove('scroll');
});

// Activate Globe Menu Button
menuBtn.addEventListener('click', () => {
	window.matchMedia('(max-width: 814px)').matches
		? mobileMenu.classList.toggle('active')
		: null;
});

// Logo Scroll To Top
logo.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});
