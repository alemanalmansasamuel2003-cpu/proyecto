console.log("Página de Películas y Series cargada correctamente ✅");

// Datos de las figuras
const figurasPeliculas = [
  {
    title: "Batman",
    desc: "Figura coleccionable de Toji Fushiguro (Jujutsu Kaisen).",
    img: "../imagenes/peliculas-series1.jpg"
  },
  {
    title: "Black Adam",
    desc: "Figura del Pilar del Agua de Kimetsu no Yaiba.",
    img: "../imagenes/peliculas-series2.jpg"
  },
  {
    title: "Blue Beetle",
    desc: "Figura de Naruto modo sabio con base decorativa.",
    img: "../imagenes/peliculas-series3.jpg"
  },
  {
    title: "Thor el dios del trueno",
    desc: "Figura del Gear Fifth (One Piece) en edición especial.",
    img: "../imagenes/peliculas-series4.jpg"
  },
  {
    title: "Bruce Lee",
    desc: "Figura de Tanjiro edición especial con base.",
    img: "../imagenes/peliculas-series5.jpg"
  },
  {
    title: "pitel just",
    desc: "Figura de Zenitsu en pose de ataque.",
    img: "../imagenes/peliculas-series6.jpg"
  }
];

// Contenedor donde se insertarán las cards
const animeGallery = document.getElementById("anime-gallery");

// Inserta las figuras dinámicamente
figurasPeliculas.forEach(figura => {
  const card = document.createElement("div");
  card.classList.add("anime-card");
  card.innerHTML = `
    <img src="${figura.img}" alt="${figura.title}">
    <h3>${figura.title}</h3>
    <p>${figura.desc}</p>
  `;
  animeGallery.appendChild(card);
});
