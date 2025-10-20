// === Referencias a elementos ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const header = document.getElementById("header");
const dropdown = document.getElementById("dropdown");

// === Abrir / cerrar menú hamburguesa ===
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");

  // Expande el fondo naranja si se abre
  if (navLinks.classList.contains("show")) {
    header.classList.add("expandido");
  } else {
    header.classList.remove("expandido");

    // 🔹 Cierra el menú de categorías si estaba abierto
    dropdown.classList.remove("show");

    // 🔹 NUEVO: fuerza ocultar el contenido desplegado (corrige el fallo)
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    if (dropdownContent) {
      dropdownContent.style.display = "none"; // 🔹 agregado
    }
  }
});

// === Desplegar categorías (solo en móvil) ===
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("show");

    // 🔹 NUEVO: control explícito del despliegue en móvil
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    if (dropdown.classList.contains("show")) {
      dropdownContent.style.display = "block"; // 🔹 agregado
    } else {
      dropdownContent.style.display = "none";  // 🔹 agregado
    }
  }
});
