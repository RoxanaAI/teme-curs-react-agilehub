let mainNav = document.getElementById('navbar'); // 'js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    mainNav.classList.toggle('active');
});

function myFunction() {
    mainNav.classList.toggle("mystyle");
  }