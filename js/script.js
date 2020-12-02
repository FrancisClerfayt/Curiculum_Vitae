let hamButton = document.querySelector('.ham');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('.navlink');

function toggleNavbar(){
	navbar.classList.toggle('showNav');
	let icon = document.querySelector('.ham > span');
	icon.classList.toggle('fa-bars');
	icon.classList.toggle('fa-times');	
}

hamButton.addEventListener('click', toggleNavbar);
navlinks.forEach(function(navLink){
	navLink.addEventListener('click', toggleNavbar);
});