console.log("Página de Anime cargada correctamente ✅");

// Datos de las figuras
const figurasAnime = [
  {
    title: "Toji Fushiguro",
    desc: "Figura coleccionable de Toji Fushiguro (Jujutsu Kaisen).",
    img: "../imagenes/anime1.jpg"
  },
  {
    title: "Megumi Fushiguro y Nobara Kugisaki",
    desc: "Figura coleccionable",
    img: "../imagenes/anime2.jpg"
  },
  {
    title: "Yūji Itadori y Satoru Gojō",
    desc: "Figura decorativa.",
    img: "../imagenes/anime3.jpg"
  },
  {
    title: "Giyū Tomioka",
    desc: "Figura coleccionable",
    img: "../imagenes/anime4.jpg"
  },
  {
    title: "tanjiro kamado",
    desc: "Figura del Pilar del Agua de Kimetsu no Yaiba.",
    img: "../imagenes/anime5.jpg"
  },
  {
    title: "Monkey D. Luffy",
    desc: "Figura coleccionable",
    img: "../imagenes/anime6.jpg"
  }
];

// Contenedor donde se insertarán las cards
const animeGallery = document.getElementById("anime-gallery");

// Inserta las figuras
figurasAnime.forEach(figura => {
  const card = document.createElement("div");
  card.classList.add("anime-card");
  card.innerHTML = `
    <img src="${figura.img}" alt="${figura.title}">
    <h3>${figura.title}</h3>
    <p>${figura.desc}</p>
  `;
  animeGallery.appendChild(card);
});

