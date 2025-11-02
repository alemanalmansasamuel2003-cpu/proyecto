console.log("cards3 Cargado");

const dataCards3 = [
  {
    "title": "Malenia, Espada de Miquella",
    "url_image": "imagenes/videojuegos1.jpg",
    "desc": "personaje del videojuego Elden Ring. Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Videojuegos.php"
  },
  {
    "title": "Ranni la Bruja",
    "url_image": "imagenes/videojuegos2.jpg",
    "desc": "personaje del videojuego Elden Ring. Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Videojuegos.php"
  },
  {
    "title": "Six",
    "url_image": "imagenes/videojuegos3.jpg",
    "desc": "protagonista del videojuego Little Nightmares. Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Videojuegos.php"
  },
  {
    "title": "Shallot",
    "url_image": "imagenes/videojuegos4.jpg",
    "desc": "personaje original del videojuego móvil Dragon Ball Legends. Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Videojuegos.php"
  },
  {
    "title": "Mono (con el disfraz de Fugitive / Runaway Kid)",
    "url_image": "imagenes/videojuegos5.jpg",
    "desc": "videojuego Little Nightmares II. Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Videojuegos.php"
  },
  {
    "title": "Mono",
    "url_image": "imagenes/videojuegos6.jpg",
    "desc": "el protagonista principal de Little Nightmares II. Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Videojuegos.php"
  },
];

(function() {
  let CARD3 = {
    init: function() {
      this.insertData();
    },

    insertData: function() {
      const container = document.querySelector('.card-list-3');
      if (!container) {
        console.warn("⚠️ No se encontró '.card-list-3'");
        return;
      }

      dataCards3.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.tplCardItem(item, index));
      });
    },

    tplCardItem: function(item, index) {
      return `
        <div class="card-item" id="card3-${index}">
          <img src="${item.url_image}" alt="${item.title}">
          <div class="card_info">
            <p class="card-title">${item.title}</p>
            <p class="card-desc">${item.desc}</p>
            <a class="card-cta" href="${item.link}">${item.cta}</a>
          </div>
        </div>
      `;
    },
  };

  CARD3.init();
})();
