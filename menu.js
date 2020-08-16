
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

let dropdown = document.getElementById('js-dropdown');
let dropdownToggle = document.getElementById('js-dropdown-toggle');

dropdownToggle.addEventListener('click', function () {
  dropdown.classList.toggle('not-active');
});