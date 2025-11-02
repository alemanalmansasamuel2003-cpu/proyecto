console.log("Carrusel dinámico cargado");

(function () {
  // ==== Datos del carrusel ====
  const dataSlides = [
    { src: "imagenes/anime1.jpg", alt: "Figura 1" },
    { src: "imagenes/Artesanal1.jpg", alt: "Figura 2" },
    { src: "imagenes/Legos2.jpg", alt: "Figura 3" },
    { src: "imagenes/peluche5.jpg", alt: "Figura 4" },
    { src: "imagenes/peliculas-series3.jpg", alt: "Figura 5" },
    { src: "imagenes/videojuegos6.jpg", alt: "Figura 6" },

  ];

  // ==== Crear estructura base ====
  const carouselSection = document.createElement("section");
  carouselSection.classList.add("carousel-container");

  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  // ==== Insertar imágenes dinámicamente ====
  dataSlides.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    slide.appendChild(img);
    carouselDiv.appendChild(slide);
  });

  // ==== Crear botones ====
  const prevBtn = document.createElement("button");
  prevBtn.classList.add("prev");
  prevBtn.innerHTML = "&#10094;";

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("next");
  nextBtn.innerHTML = "&#10095;";

  // ==== Crear indicadores ====
  const indicators = document.createElement("div");
  indicators.classList.add("indicators");

  // ==== Agregar todo al contenedor ====
  carouselSection.appendChild(carouselDiv);
  carouselSection.appendChild(prevBtn);
  carouselSection.appendChild(nextBtn);
  carouselSection.appendChild(indicators);

  // ==== Insertar en el documento ====
  // Se agregará dentro del <main>, antes de las cards
  const main = document.querySelector("main");
  if (main) {
    main.insertBefore(carouselSection, main.firstChild);
  } else {
    console.warn("⚠️ No se encontró la etiqueta <main> para insertar el carrusel.");
  }

  // ==== Funcionalidad del carrusel ====
  const slides = carouselDiv.querySelectorAll(".slide");
  let currentIndex = 0;
  let autoPlay;

  // Crear indicadores dinámicos
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    indicators.appendChild(dot);
    dot.addEventListener("click", () => goToSlide(i));
  });

  const dots = indicators.querySelectorAll("span");

  function goToSlide(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    resetAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    resetAutoPlay();
  });

  function startAutoPlay() {
    autoPlay = setInterval(() => goToSlide(currentIndex + 1), 4000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
  }

  startAutoPlay();
})();
