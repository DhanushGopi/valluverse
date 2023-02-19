//opening menu

document
  .querySelector(".navbar__hamburger")
  .addEventListener("click", navbarResponsiveOpen);

function navbarResponsiveOpen() {
  document
    .querySelector(".navbar__sections--overlay")
    .classList.toggle("active");
}

//closing menu

document
  .querySelector(".overlay__close")
  .addEventListener("click", navbarResponsiveClose);

function navbarResponsiveClose() {
  document
    .querySelector(".navbar__sections--overlay")
    .classList.remove("active");
}
