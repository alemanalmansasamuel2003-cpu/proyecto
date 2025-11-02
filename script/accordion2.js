console.log("Cargando Acordión 2");

const dataAccordion2 = [
  {
    title: "Figuras recomendadas",
    desc: "Selección especial para coleccionistas exclusivos.",
    img: "imagenes/avataragua.jpg"
  },
];

(function () {
  let ACCORDION2 = {
    init: function () {
      let _self = this;
      this.insertData(_self);
      this.eventhandler(_self);
    },

    insertData: function (_self) {
      dataAccordion2.map(function (item) {
        document
          .querySelector(".main-accordion-container-2")
          .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
      });
    },

    eventhandler: function (_self) {
      let arrayRefs = document.querySelectorAll(".accordion-title-2");
      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener("click", function (event) {
          _self.showTab(event.currentTarget);
        });
      }
    },

    tplAccordionItem: function (item) {
      return `
      <div class='accordion-item-2'>
        <div class='accordion-title-2'>
          <p>${item.title}</p>
        </div>
        <div class='accordion-desc-2'>
          <img src="${item.img}" alt="${item.title}" class="accordion-img">
          <p>${item.desc}</p>
        </div>
      </div>`;
    },

    showTab: function (refItem) {
      let parent = refItem.parentElement;
      let isActive = parent.classList.contains("tab-active-2");

      document.querySelectorAll(".accordion-item-2").forEach((item) => {
        item.classList.remove("tab-active-2");
      });

      if (!isActive) {
        parent.classList.add("tab-active-2");
      }
    },
  };

  ACCORDION2.init();
})();
