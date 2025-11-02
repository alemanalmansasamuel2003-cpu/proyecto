console.log("Cargando Acordión 5");

const dataAccordion5 = [
  {
    title: "Colección limitada",
    desc: "Figuras que se encuentran en cantidades muy reducidas.",
    img: "imagenes/pica.jpg"
  },
];

(function () {
  let ACCORDION5 = {
    init: function () {
      this.insertData();
      this.eventhandler();
    },

    insertData: function () {
      dataAccordion5.forEach((item) => {
        document
          .querySelector(".main-accordion-container-5")
          .insertAdjacentHTML("beforeend", this.tplAccordionItem(item));
      });
    },

    eventhandler: function () {
      document.querySelectorAll(".accordion-title-5").forEach((ref) => {
        ref.addEventListener("click", (event) => {
          this.showTab(event.currentTarget);
        });
      });
    },

    tplAccordionItem: function (item) {
      return `
      <div class='accordion-item-5'>
        <div class='accordion-title-5'>
          <p>${item.title}</p>
        </div>
        <div class='accordion-desc-5'>
          <img src="${item.img}" alt="${item.title}" class="accordion-img">
          <p>${item.desc}</p>
        </div>
      </div>`;
    },

    showTab: function (refItem) {
      let parent = refItem.parentElement;
      let isActive = parent.classList.contains("tab-active-5");

      document.querySelectorAll(".accordion-item-5").forEach((item) =>
        item.classList.remove("tab-active-5")
      );

      if (!isActive) {
        parent.classList.add("tab-active-5");
      }
    },
  };

  ACCORDION5.init();
})();

