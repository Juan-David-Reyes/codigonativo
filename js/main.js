

document.addEventListener("DOMContentLoaded", function () {
    const serviciosBtn = document.getElementById("servicios");
    const mobileMenuBtn = document.querySelector(".mobile-menu");
    const submenu = document.querySelector(".submenu");
    const header = document.querySelector("header");
    const mobileIcon = mobileMenuBtn.querySelector("i"); // Icono dentro de .mobile-menu
    let lastScrollY = window.scrollY;

    // Función para alternar el submenu
    function toggleSubmenu(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
        const isActive = submenu.classList.toggle("active");
        serviciosBtn.classList.toggle("active"); // Añade o remueve la clase active en #servicios
        serviciosBtn.setAttribute("aria-expanded", isActive); // Cambia aria-expanded según el estado del submenu
    }

    // Alternar visibilidad del submenu al hacer clic en los botones
    serviciosBtn.addEventListener("click", toggleSubmenu);

    // Agregar soporte para Enter y Space
    serviciosBtn.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault(); // Previene el desplazamiento de la página con Space
            toggleSubmenu(event); // Activa la función de alternar submenu
        }
    });

    // Alternar el menú móvil y cambiar el ícono
    mobileMenuBtn.addEventListener("click", function () {
        submenu.classList.toggle("active");
        mobileIcon.classList.toggle("fa-bars");
        mobileIcon.classList.toggle("fa-close"); // Cambia entre las clases
    });

    // Ocultar el submenu al hacer clic fuera del header
    document.addEventListener("click", function (event) {
        if (!header.contains(event.target)) {
            submenu.classList.remove("active");
            serviciosBtn.classList.remove("active"); // Asegura que se remueva la clase active
            serviciosBtn.setAttribute("aria-expanded", "false"); // Cambia aria-expanded a false
            mobileIcon.classList.add("fa-bars");
            mobileIcon.classList.remove("fa-close"); // Asegura que vuelva al estado inicial
        }
    });

    // Ocultar el submenu al hacer scroll más de 10px
    window.addEventListener("scroll", function () {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY) > 10) {
            submenu.classList.remove("active");
            serviciosBtn.classList.remove("active"); // Asegura que se remueva la clase active
            serviciosBtn.setAttribute("aria-expanded", "false"); // Cambia aria-expanded a false
            mobileIcon.classList.add("fa-bars");
            mobileIcon.classList.remove("fa-close"); // Asegura que vuelva al estado inicial
        }

        lastScrollY = currentScrollY;
    });

    // Funcion para llamar el año actual

    function updateCurrentYear() {
        var currentYear = new Date().getFullYear();
        document.getElementById('currentYear').innerText = currentYear;
    }
    // Llamar a la función para inicializar el año actual
    updateCurrentYear();
});


