// Seleciona elementos do DOM
const navMenu = document.querySelector(".nav-menu"),
  navToggle = document.querySelector(".nav-toggle"),
  navClose = document.querySelector(".nav-close");

// Adiciona listener de evento para exibir o menu
// caso o elemento de toggle seja clicado
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

// Adiciona listener de evento para remover o menu
// caso o elemento de fechamento seja clicado
navClose &&
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
