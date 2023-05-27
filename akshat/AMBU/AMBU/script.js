let hamburger =document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');
let links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate');
});

for(let i=0; i < links.length; i++){
    links[i].addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    });
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}