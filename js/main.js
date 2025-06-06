document.addEventListener("DOMContentLoaded", function () {
  const serviciosBtn = document.getElementById("servicios");
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const submenu = document.querySelector(".submenu");
  const header = document.querySelector("header"); // Ajusta al contenedor de tu header
  let lastScrollY = window.scrollY;

  // Función para alternar el submenu
  function toggleSubmenu(event) {
    event.stopPropagation(); // Evita que el clic se propague al documento
    submenu.classList.toggle("active");
  }

  // Alternar visibilidad del submenu al hacer clic en los botones
  serviciosBtn.addEventListener("click", toggleSubmenu);
  mobileMenuBtn.addEventListener("click", toggleSubmenu);

  // Ocultar el submenu al hacer clic fuera del header
  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) {
      submenu.classList.remove("active");
    }
  });

  // Ocultar el submenu al hacer scroll más de 100px
  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) > 10) {
      submenu.classList.remove("active");
    }

    lastScrollY = currentScrollY;
  });
});
