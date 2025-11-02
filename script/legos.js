console.log("Página de Legos cargada correctamente ");

// Datos de las figuras LEGO
const figurasLegos = [
  {
    title: "LEGO Naruto",
    desc: "Set de Naruto hecho en bloques LEGO personalizados.",
    img: "../imagenes/legos1.jpg"
  },
  {
    title: "LEGO Luffy",
    desc: "Figura de Luffy (One Piece) versión LEGO artesanal.",
    img: "../imagenes/legos2.jpg"
  },
  {
    title: "LEGO Tanjiro",
    desc: "Bloques LEGO con Tanjiro Kamado y base decorativa.",
    img: "../imagenes/legos3.jpg"
  },
  {
    title: "LEGO Dragon Ball",
    desc: "Mini figura inspirada en Goku con bloques LEGO.",
    img: "../imagenes/legos4.jpg"
  },
  {
    title: "LEGO Demon Slayer",
    desc: "Figura de Zenitsu hecha con piezas LEGO personalizadas.",
    img: "../imagenes/legos5.jpg"
  },
  {
    title: "LEGO One Piece",
    desc: "Barco Going Merry hecho con bloques LEGO.",
    img: "../imagenes/legos6.jpg"
  }
];

// Contenedor donde se insertarán las cards
const animeGallery = document.getElementById("anime-gallery");

// Inserta las figuras dinámicamente
figurasLegos.forEach(figura => {
  const card = document.createElement("div");
  card.classList.add("anime-card"); // Mantenemos el mismo estilo de card
  card.innerHTML = `
    <img src="${figura.img}" alt="${figura.title}">
    <h3>${figura.title}</h3>
    <p>${figura.desc}</p>
  `;
  animeGallery.appendChild(card);
});
