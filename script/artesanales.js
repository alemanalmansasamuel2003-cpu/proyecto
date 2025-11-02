console.log("Página de Artesanales cargada correctamente ");

// Datos de las figuras artesanales
const figurasArtesanales = [
  {
    title: "Figura artesanal 1",
    desc: "Figura hecha a mano con detalles únicos.",
    img: "../imagenes/artesanal1.jpg"
  },
  {
    title: "Figura artesanal 2",
    desc: "Modelo artesanal elaborado con resina y pintura acrílica.",
    img: "../imagenes/artesanal2.jpg"
  },
  {
    title: "Figura artesanal 3",
    desc: "Diseño original inspirado en personajes de anime.",
    img: "../imagenes/artesanal3.jpg"
  },
  {
    title: "Figura artesanal 4",
    desc: "Creación coleccionable pintada completamente a mano.",
    img: "../imagenes/artesanal4.jpg"
  },
  {
    title: "Figura artesanal 5",
    desc: "Obra hecha en porcelana fría con base personalizada.",
    img: "../imagenes/artesanal5.jpg"
  },
  {
    title: "Figura artesanal 6",
    desc: "Edición especial hecha 100% a mano.",
    img: "../imagenes/artesanal6.jpg"
  }
];

// Contenedor donde se insertarán las cards
const animeGallery = document.getElementById("anime-gallery");

// Inserta las figuras dinámicamente
figurasArtesanales.forEach(figura => {
  const card = document.createElement("div");
  card.classList.add("anime-card"); // Usa mismo estilo de Anime y Películas/Series
  card.innerHTML = `
    <img src="${figura.img}" alt="${figura.title}">
    <h3>${figura.title}</h3>
    <p>${figura.desc}</p>
  `;
  animeGallery.appendChild(card);
});
