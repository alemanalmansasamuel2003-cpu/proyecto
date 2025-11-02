// === Referencias a elementos ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const header = document.getElementById("header");
const dropdown = document.getElementById("dropdown");

if (hamburger && navLinks && header) {
  // === Abrir / cerrar menú hamburguesa ===
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");

    // 🔹 Expande el fondo naranja si se abre
    if (navLinks.classList.contains("show")) {
      header.classList.add("expandido");
    } else {
      header.classList.remove("expandido");

      // 🔹 Cierra el menú de categorías si estaba abierto
      if (dropdown) dropdown.classList.remove("show");

      // 🔹 Oculta el contenido desplegado si existía
      const dropdownContent = dropdown?.querySelector(".dropdown-content");
      if (dropdownContent) dropdownContent.style.display = "none";
    }
  });
}

// === Desplegar categorías (solo en móvil) ===
if (dropdown) {
  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      const target = e.target;

      // 🔹 Si se hace clic en el botón principal "Categorías ▼"
      if (target.classList.contains("dropbtn")) {
        e.preventDefault(); // evita salto de enlace
        dropdown.classList.toggle("show");

        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropdown.classList.contains("show")) {
          dropdownContent.style.display = "flex";
        } else {
          dropdownContent.style.display = "none";
        }
      }
    }
  });
}

console.log("✅ Menú hamburguesa activo y funcional");
