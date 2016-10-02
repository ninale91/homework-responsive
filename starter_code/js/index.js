$(document).ready(start);

function start(){
  $('#hamburger-button').click(openMenu);
}

function openMenu() {
  $('nav').slideToggle();
}
