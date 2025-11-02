console.log("Cargando Acordión 4");

const dataAccordion4 = [
  {
    title: "Colección destacada",
    desc: "Piezas únicas seleccionadas cuidadosamente.",
    img: "imagenes/yoda.jpg"
  },
];

(function () {
  let ACCORDION4 = {
    init: function () {
      this.insertData();
      this.eventhandler();
    },

    insertData: function () {
      dataAccordion4.forEach((item) => {
        document
          .querySelector(".main-accordion-container-4")
          .insertAdjacentHTML("beforeend", this.tplAccordionItem(item));
      });
    },

    eventhandler: function () {
      document.querySelectorAll(".accordion-title-4").forEach((ref) => {
        ref.addEventListener("click", (event) => {
          this.showTab(event.currentTarget);
        });
      });
    },

    tplAccordionItem: function (item) {
      return `
      <div class='accordion-item-4'>
        <div class='accordion-title-4'>
          <p>${item.title}</p>
        </div>
        <div class='accordion-desc-4'>
          <img src="${item.img}" alt="${item.title}" class="accordion-img">
          <p>${item.desc}</p>
        </div>
      </div>`;
    },

    showTab: function (refItem) {
      let parent = refItem.parentElement;
      let isActive = parent.classList.contains("tab-active-4");

      document.querySelectorAll(".accordion-item-4").forEach((item) =>
        item.classList.remove("tab-active-4")
      );

      if (!isActive) {
        parent.classList.add("tab-active-4");
      }
    },
  };

  ACCORDION4.init();
})();
