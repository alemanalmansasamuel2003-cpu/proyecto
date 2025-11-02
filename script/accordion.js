console.log("Cargando Acordión");

const dataAccordion = [
  {
    title: "Nuevos lanzamientos ",
    desc: "nueva figura de dragon ball.  !!!.",
    img: "imagenes/dragon1.jpg"
  },
 
];

(function () {
  let ACCORDION = {
    init: function () {
      let _self = this;
      this.insertData(_self);
      this.eventhandler(_self);
    },

    insertData: function (_self) {
      dataAccordion.map(function (item) {
        document
          .querySelector(".main-accordion-container")
          .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
      });
    },

    eventhandler: function (_self) {
      let arrayRefs = document.querySelectorAll(".accordion-title");
      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener("click", function (event) {
          _self.showTab(event.currentTarget);
        });
      }
    },

   tplAccordionItem: function (item) {
  return `
    <div class='accordion-item'>
      <div class='accordion-title'>
        <p>${item.title}</p>
      </div>
      <div class='accordion-desc'>
        <img src="${item.img}" alt="${item.title}" class="accordion-img">
        <p>${item.desc}</p>
      </div>
    </div>`;
    },


    showTab: function (refItem) {
      let parent = refItem.parentElement;
      let isActive = parent.classList.contains("tab-active");

      // 🔹 Cierra todos los demás
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("tab-active");
      });

      // 🔹 Si no estaba activo, lo abre; si estaba, lo deja cerrado
      if (!isActive) {
        parent.classList.add("tab-active");
      }
    },
  };

  ACCORDION.init();
})();
