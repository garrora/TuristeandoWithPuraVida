'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// Obtén la fecha actual
var fechaActual = new Date();
        
// Formatea la fecha en el formato adecuado para el elemento input date
var dd = String(fechaActual.getDate()).padStart(2, '0');
var mm = String(fechaActual.getMonth() + 1).padStart(2, '0'); // El mes comienza desde 0
var yyyy = fechaActual.getFullYear();

// Establece el valor predeterminado del input date
var fechaHoy = yyyy + '-' + mm + '-' + dd;

// Obtén la fecha actual
var fechaActualMasDos = new Date();

// Suma 2 días a la fecha actual
fechaActualMasDos.setDate(fechaActualMasDos.getDate() + 2);

// Formatea la fecha en el formato adecuado para el elemento input date
var dd = String(fechaActualMasDos.getDate()).padStart(2, '0');
var mm = String(fechaActualMasDos.getMonth() + 1).padStart(2, '0'); // El mes comienza desde 0
var yyyy = fechaActualMasDos.getFullYear();

// Establece el valor predeterminado del input date
var fechaHoyMas2Dias = yyyy + '-' + mm + '-' + dd;


checkin.value = fechaHoy;
checkout.value = fechaHoyMas2Dias;