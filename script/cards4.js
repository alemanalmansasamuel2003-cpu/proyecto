console.log("cards4 Cargado");

const dataCards4 = [
  {
    "title": "Figura Especial 1",
    "url_image": "imagenes/legos1.jpg",
    "desc": "Edición limitada increíble!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Legos.php"
  },
  {
    "title": "Figura Especial 2",
    "url_image": "imagenes/legos2.jpg",
    "desc": "Colección premium exclusiva!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Legos.php"
  },
  {
    "title": "Figura Especial 3",
    "url_image": "imagenes/legos3.jpg",
    "desc": "Ideal para coleccionistas!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Legos.php"
  },
  {
    "title": "Figura Especial 3",
    "url_image": "imagenes/legos4.jpg",
    "desc": "Ideal para coleccionistas!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Legos.php"
  },
  {
    "title": "Figura Especial 3",
    "url_image": "imagenes/legos5.jpg",
    "desc": "Ideal para coleccionistas!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Legos.php"
  },
  {
    "title": "Figura Especial 3",
    "url_image": "imagenes/legos6.jpg",
    "desc": "Ideal para coleccionistas!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Legos.php"
  }
];

(function() {
  let CARD4 = {
    init: function() {
      this.insertData();
    },

    insertData: function() {
      const container = document.querySelector('.card-list-4');
      if (!container) {
        console.warn("⚠️ No se encontró '.card-list-4'");
        return;
      }

      dataCards4.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.tplCardItem(item, index));
      });
    },

    tplCardItem: function(item, index) {
      return `
        <div class="card-item" id="card4-${index}">
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

  CARD4.init();
})();
