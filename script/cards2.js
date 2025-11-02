console.log("cards2 Cargado");

const dataCards2 = [
  {
    "title": "Batman",
    "url_image": "imagenes/peliculas-series1.jpg",
    "desc": "Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peliculas-Series.php"
  },
   {
    "title": "Black Adam",
    "url_image": "imagenes/peliculas-series2.jpg",
    "desc": "Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peliculas-Series.php"
  },
  {
    "title": "Blue Beetle",
    "url_image": "imagenes/peliculas-series3.jpg",
    "desc": "Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peliculas-Series.php"
  },
   {
    "title": "Thor el dios del trueno",
    "url_image": "imagenes/peliculas-series4.jpg",
    "desc": "Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peliculas-Series.php"
  },
   {
    "title": "Bruce Lee",
    "url_image": "imagenes/peliculas-series5.jpg",
    "desc": "Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peliculas-Series.php"
  },
   {
    "title": "pitel just",
    "url_image": "imagenes/peliculas-series6.jpg",
    "desc": "Edición especial con base!!",
    "cta": "Mostrar más ...",
    "link": "Mine-World/Peliculas-Series.php"
  },
];

(function() {
  let CARD2 = {
    init: function() {
      let _self = this;
      this.insertData(_self);
    },
    insertData: function(_self) {
      dataCards2.map(function(item, index) {
        const container = document.querySelector('.card-list-2');
        if (container) {
          container.insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
        } else {
          console.warn("⚠️ No se encontró '.card-list-2'");
        }
      });
    },
    tplCardItem: function(item, index) {
      return `
        <div class="card-item" id="card2-${index}">
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
  CARD2.init();
})();
