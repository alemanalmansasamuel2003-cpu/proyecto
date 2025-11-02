console.log("Página de Videojuegos cargada correctamente ✅");

// Datos de las figuras de videojuegos
const figurasVideojuegos = [
  {
    title: "Malenia, Espada de Miquella",
    desc: "personaje del videojuego Elden Ring.",
    img: "../imagenes/videojuegos1.jpg"
  },
  {
    title: "Ranni la Bruja",
    desc: "personaje del videojuego Elden Ring. Edición especial con base!!",
    img: "../imagenes/videojuegos2.jpg"
  },
  {
    title: "Six",
    desc: "protagonista del videojuego Little Nightmares. Edición especial con base!!",
    img: "../imagenes/videojuegos3.jpg"
  },
  {
    title: "Shallot",
    desc: "personaje original del videojuego móvil Dragon Ball Legends. Edición especial con base!!",
    img: "../imagenes/videojuegos4.jpg"
  },
  {
    title: "Mono (con el disfraz de Fugitive / Runaway Kid)",
    desc: "videojuego Little Nightmares II. Edición especial con base!!",
    img: "../imagenes/videojuegos5.jpg"
  },
  {
    title: "Mono",
    desc: "el protagonista principal de Little Nightmares II. Edición especial con base!!",
    img: "../imagenes/videojuegos6.jpg"
  }
];

// Contenedor donde se insertarán las cards
const animeGallery = document.getElementById("anime-gallery");

// Inserta las figuras dinámicamente
figurasVideojuegos.forEach(figura => {
  const card = document.createElement("div");
  card.classList.add("anime-card"); // Mantiene el mismo estilo de card
  card.innerHTML = `
    <img src="${figura.img}" alt="${figura.title}">
    <h3>${figura.title}</h3>
    <p>${figura.desc}</p>
  `;
  animeGallery.appendChild(card);
});
