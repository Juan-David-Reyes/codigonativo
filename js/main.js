document.addEventListener("DOMContentLoaded", function () {
  const serviciosBtn = document.getElementById("servicios");
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const submenu = document.querySelector(".submenu");
  const header = document.querySelector("header");

  let lastScrollY = window.scrollY;

  // Función para abrir/cerrar submenu
  function toggleSubmenu(event) {
    event.preventDefault();
    event.stopPropagation();

    const isActive = submenu.classList.toggle("active");
    serviciosBtn.classList.toggle("active", isActive);
    serviciosBtn.setAttribute("aria-expanded", isActive);
  }

  // Abrir/cerrar submenu con clic en Servicios y menú móvil
  serviciosBtn.addEventListener("click", toggleSubmenu);
  mobileMenuBtn.addEventListener("click", toggleSubmenu);

  // Cerrar submenu al hacer clic fuera del header
  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) {
      submenu.classList.remove("active");
      serviciosBtn.classList.remove("active");
      serviciosBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Cerrar submenu con tecla Esc cuando esté abierto
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && submenu.classList.contains("active")) {
      submenu.classList.remove("active");
      serviciosBtn.classList.remove("active");
      serviciosBtn.setAttribute("aria-expanded", "false");
      serviciosBtn.focus();
    }
  });

  // Ocultar submenu al hacer scroll más de 10px
  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) > 10 && submenu.classList.contains("active")) {
      submenu.classList.remove("active");
      serviciosBtn.classList.remove("active");
      serviciosBtn.setAttribute("aria-expanded", "false");
    }

    lastScrollY = currentScrollY;
  });

  // Abrir submenu con teclado (Enter o Space) en el botón Servicios
  serviciosBtn.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleSubmenu(event);
    }
  });
});
