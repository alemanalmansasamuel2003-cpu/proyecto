console.log("Página de Peluches cargada correctamente ✅");

// Datos de las figuras de peluches
const figurasPeluches = [
  {
    title: "Oso",
    desc: "El mejor de todos!!",
    img: "../imagenes/peluche1.jpg"
  },
  {
    title: "mickey mouse",
    desc: "Peluchito de mickey mouse",
    img: "../imagenes/peluche2.jpg"
  },
  {
    title: "hello kitty",
    desc: "Peluche de hello kitty",
    img: "../imagenes/peluche3.jpg"
  },
  {
    title: "Peluches de Capibara",
    desc: "El mejor de todos!!",
    img: "../imagenes/peluche4.jpg"
  },
  {
    "title": "stitch",
    title: "stitch",
    desc: "El mejor de todos!!",
    img: "../imagenes/peluche5.jpg"
  },
  {
    title: "creeper",
    desc: "peliche de minecraft",
    img: "../imagenes/peluche6.jpg"
  }
];

// Contenedor donde se insertarán las cards
const animeGallery = document.getElementById("anime-gallery");

// Inserta las figuras dinámicamente
figurasPeluches.forEach(figura => {
  const card = document.createElement("div");
  card.classList.add("anime-card"); // usamos el mismo estilo de cards
  card.innerHTML = `
    <img src="${figura.img}" alt="${figura.title}">
    <h3>${figura.title}</h3>
    <p>${figura.desc}</p>
  `;
  animeGallery.appendChild(card);
});
