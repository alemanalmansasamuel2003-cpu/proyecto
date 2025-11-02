console.log("Cargando Acordión 3");

const dataAccordion3 = [
  {
    title: "Figuras recomendadas",
    desc: "Selección especial para coleccionistas exclusivos.",
    img: "imagenes/sonic.jpg"
  },
];

(function () {
  let ACCORDION3 = {
    init: function () {
      this.insertData();
      this.eventhandler();
    },

    insertData: function () {
      dataAccordion3.forEach((item) => {
        document
          .querySelector(".main-accordion-container-3")
          .insertAdjacentHTML("beforeend", this.tplAccordionItem(item));
      });
    },

    eventhandler: function () {
      document.querySelectorAll(".accordion-title-3").forEach((ref) => {
        ref.addEventListener("click", (event) => {
          this.showTab(event.currentTarget);
        });
      });
    },

    tplAccordionItem: function (item) {
      return `
      <div class='accordion-item-3'>
        <div class='accordion-title-3'>
          <p>${item.title}</p>
        </div>
        <div class='accordion-desc-3'>
          <img src="${item.img}" alt="${item.title}" class="accordion-img">
          <p>${item.desc}</p>
        </div>
      </div>`;
    },

    showTab: function (refItem) {
      let parent = refItem.parentElement;
      let isActive = parent.classList.contains("tab-active-3");

      document.querySelectorAll(".accordion-item-3").forEach((item) =>
        item.classList.remove("tab-active-3")
      );

      if (!isActive) {
        parent.classList.add("tab-active-3");
      }
    },
  };

  ACCORDION3.init();
})();
