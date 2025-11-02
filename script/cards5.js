console.log("cards5 Cargado");

const dataCards5 = [
  {
    "title": "Oso",
    "url_image": "imagenes/Peluche1.jpg",
    "desc": "Edición coleccionista con detalles únicos.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peluches.php"
  },
  {
    "title": "mickey mouse",
    "url_image": "imagenes/Peluche2.jpg",
    "desc": "Colección limitada de alta calidad.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peluches.php"
  },
  {
    "title": "hello kitty",
    "url_image": "imagenes/Peluche3.jpg",
    "desc": "Ideal para decorar tu vitrina gamer.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peluches.php"
  },
  {
    "title": "Capibara",
    "url_image": "imagenes/Peluche4.jpg",
    "desc": "Ideal para decorar tu vitrina gamer.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peluches.php"
  },
  {
    "title": "stitch",
    "url_image": "imagenes/Peluche5.jpg",
    "desc": "Ideal para decorar tu vitrina gamer.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peluches.php"
  },
  {
    "title": "creeper",
    "url_image": "imagenes/Peluche6.jpg",
    "desc": "Ideal para decorar tu vitrina gamer.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peluches.php"
  },
];

(function() {
  let CARD5 = {
    init: function() {
      this.insertData();
    },

    insertData: function() {
      const container = document.querySelector('.card-list-5');
      if (!container) {
        console.warn("⚠️ No se encontró '.card-list-5'");
        return;
      }

      dataCards5.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.tplCardItem(item, index));
      });
    },

    tplCardItem: function(item, index) {
      return `
        <div class="card-item" id="card5-${index}">
          <img src="${item.url_image}" alt="${item.title}">
          <div class="card_info">
            <p class="card-title">${item.title}</p>
            <p class="card-desc">${item.desc}</p>
            <a class="card-cta" href="${item.link}">${item.cta}</a>
          </div>
        </div>
      `;
    }
  };

  CARD5.init();
})();
