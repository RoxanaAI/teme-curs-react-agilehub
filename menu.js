
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

let dropdown = document.getElementById('js-dropdown_men');
let dropdownMenToggle = document.getElementById('js-dropdown-toggle_men');
dropdownMenToggle.addEventListener('click', function () {
  dropdown.classList.toggle('active');
});

let dropdownWomen = document.getElementById('js-dropdown_women');
let dropdownWomenToggle = document.getElementById('js-dropdown-toggle_wowmen');
dropdownWomenToggle.addEventListener('click', function () {
  dropdownWomen.classList.toggle('active');
});