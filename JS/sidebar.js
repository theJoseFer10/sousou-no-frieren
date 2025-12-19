document.addEventListener('DOMContentLoaded', () => {
    const btnOpen = document.getElementById("menu_button");
    const btnClose = document.getElementById("close_sidebar");
    const sidebar = document.getElementById("sidebar");
    const links = sidebar.querySelectorAll("a");


    // Función para abrir
    const openSidebar = () => {
        sidebar.classList.add("active");
    }

    // Función para cerrar
    const closeSidebar = () => {
        sidebar.classList.remove("active");
    }

    // Eventos
    if (btnOpen) {
        btnOpen.addEventListener("click", openSidebar);
    }

    if (btnClose) {
        // Nota: Asegúrate de que el clic sea en el botón o la imagen
        btnClose.addEventListener("click", closeSidebar);
    }

    // Cerrar al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });
});