console.log("cards6 Cargado");

const dataCards6 = [
  {
    "title": "Colección Especial 1",
    "url_image": "imagenes/artesanal1.jpg",
    "desc": "Edición exclusiva para coleccionistas.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Artesanales.php"
  },
  {
    "title": "Colección Especial 2",
    "url_image": "imagenes/artesanal2.jpg",
    "desc": "Diseño premium y detalles únicos.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Artesanales.php"
  },
  {
    "title": "Colección Especial 3",
    "url_image": "imagenes/artesanal3.jpg",
    "desc": "Perfecto para exhibición y colección.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Artesanales.php"
  },
   {
    "title": "Colección Especial 3",
    "url_image": "imagenes/artesanal4.jpg",
    "desc": "Perfecto para exhibición y colección.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Artesanales.php"
  },
   {
    "title": "Colección Especial 3",
    "url_image": "imagenes/artesanal5.jpg",
    "desc": "Perfecto para exhibición y colección.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Artesanales.php"
  },
   {
    "title": "Colección Especial 3",
    "url_image": "imagenes/artesanal6.jpg",
    "desc": "Perfecto para exhibición y colección.",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Artesanales.php"
  },
];

(function() {
  let CARD6 = {
    init: function() {
      this.insertData();
    },

    insertData: function() {
      const container = document.querySelector('.card-list-6');
      if (!container) {
        console.warn("⚠️ No se encontró '.card-list-6'");
        return;
      }

      dataCards6.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.tplCardItem(item, index));
      });
    },

    tplCardItem: function(item, index) {
      return `
        <div class="card-item" id="card6-${index}">
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

  CARD6.init();
})();
