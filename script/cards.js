console.log("cards Cargado");

const dataCards = [
/**/
  {
    "title": "título del muñeco",
    "url_image": "",
    "desc": "El mejor de todos!!",
    "cta": "Mostrar más ...",
    "link": ""
  },
/**/
  {
    "title": "título del muñeco",
    "url_image": "",
    "desc": "El mejor de todos!!",
    "cta": "Mostrar más ...",
    "link": ""
  },
/**/ 
  {
    "title": "título del muñeco",
    "url_image": "",
    "desc": "El mejor de todos!!",
    "cta": "Mostrar más ...",
    "link": ""
  }
];

(function() {
  let CARD = {
    init: function() {
      let _self = this;
      this.insertData(_self);
    },
    insertData: function(_self) {
      dataCards.map(function(item, index) {
        const container = document.querySelector('.card-list');
        if (container) {
          container.insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
        } else {
          console.warn("⚠️ No se encontró el contenedor '.card-list' en el documento.");
        }
      });
    },
    tplCardItem: function(item, index) {
      return (
        `<div class="card-item" id="card-number-${index}">
            <img src="${item.url_image}" alt="${item.title}">
            <div class="card_info">
                <p class="card-title">${item.title}</p>
                <p class="card-desc">${item.desc}</p>
                <a class="card-cta" target="_blank" href="${item.link}">${item.cta}</a>
            </div>
        </div>`
      );
    },
  };
  CARD.init();
})();
