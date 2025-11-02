console.log("Cargando Acordión 6");

const dataAccordion6 = [
  {
    title: "Colección Exclusiva",
    desc: "Solo disponible para verdaderos coleccionistas.",
    img: "imagenes/pareja.jpg"
  },
];

(function () {
  let ACCORDION6 = {
    init: function () {
      this.insertData();
      this.eventhandler();
    },

    insertData: function () {
      dataAccordion6.forEach((item) => {
        document
          .querySelector(".main-accordion-container-6")
          .insertAdjacentHTML("beforeend", this.tplAccordionItem(item));
      });
    },

    eventhandler: function () {
      document.querySelectorAll(".accordion-title-6").forEach((ref) => {
        ref.addEventListener("click", (event) => {
          this.showTab(event.currentTarget);
        });
      });
    },

    tplAccordionItem: function (item) {
      return `
      <div class='accordion-item-6'>
        <div class='accordion-title-6'>
          <p>${item.title}</p>
        </div>
        <div class='accordion-desc-6'>
          <img src="${item.img}" alt="${item.title}" class="accordion-img">
          <p>${item.desc}</p>
        </div>
      </div>`;
    },

    showTab: function (refItem) {
      let parent = refItem.parentElement;
      let isActive = parent.classList.contains("tab-active-6");

      document.querySelectorAll(".accordion-item-6").forEach((item) =>
        item.classList.remove("tab-active-6")
      );

      if (!isActive) {
        parent.classList.add("tab-active-6");
      }
    },
  };

  ACCORDION6.init();
})();
