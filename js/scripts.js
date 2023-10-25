/*!
 * Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Obtén una referencia al botón por su ID
var submitButton = document.getElementById("submitButton");

// Agrega un controlador de eventos al botón
submitButton.addEventListener("click", function () {
  // Define la URL externa a la que deseas redirigir
  var urlExterno =
    "https://gardenventura.com/jardineria-sant-cugat-del-valles/";

  // Redirige al usuario a la URL externa
  window.location.href = urlExterno;
});

(function () {
  const root = document.documentElement;
  console.dir(root);
  const radios = document.querySelectorAll('input[name="theme"]');

  radios.forEach((x) => {
    x.addEventListener("change", function () {
      // (this.value =='dark') ? root.style.setProperty('--topbarcolor','black'):root.style.setProperty('--topbarcolor','black');

      let body = document.querySelectorAll("section");
      //if (this.value == 'dark') {
      //    body[0].classList.remove('light', 'system');
      //    body[0].classList.add('dark');
      ///    console.log("222")
      //} else {
      //    console.log("hola")
      //    body[0].classList.remove('dark', 'system');
      //    body[0].classList.add('light');
      //}

      switch (this.value) {
        case "dark":
          body.forEach((section) => {
            section.classList.remove("bg-light");
            section.classList.add("bg-dark");
          });
          break;
        case "light":
          body.forEach((section) => {
            section.classList.remove("bg-dark");
            section.classList.add("bg-light");
          });
          break;
        default:
          break;
      }
    });
  });
})();
