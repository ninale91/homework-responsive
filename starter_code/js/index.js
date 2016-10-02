$(document).ready(start);

function start(){
  $('#hamburger-button').click(openMenu);
  $('#plus-button').click(openCategory);
}

function openMenu() {
  $('nav').slideToggle();
}

function openCategory() {
alert('working');
}
