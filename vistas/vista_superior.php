<?php 
$basePath = (isset($page) && $page != "index") ? "../" : ""; 
?> 
<!DOCTYPE html>
<html lang="espanish">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mine World</title>
  <link rel="stylesheet" href="css/estilos.css">
</head>

<body class="<?php echo (isset($page) && $page == 'anime') ? 'anime-page' : ''; ?>">

  <header id="header">  
    <div class="logo-container">
      <a href="<?php echo $basePath; ?>index.php">
        <img src="<?php echo $basePath; ?>imagenes/nuevo-logo.png" alt="Mi logo" class="logo">

       </a>
      <h1 class="site-name">Mine World</h1>
    </div>

    <!-- Botón hamburguesa -->
    <div class="hamburger" id="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- Navegación -->
    <nav>
      <ul class="nav-links" id="nav-links">
  <li><a href="../index.php">Inicio</a></li>

  <!-- CATEGORÍAS -->
  <li class="dropdown" id="dropdown">
    <a href="#" class="dropbtn">Categorías ▼</a>
    <ul class="dropdown-content">
      <li><a href="Mine-World/anime.php">Anime</a></li>
      <li><a href="Mine-World/Peliculas-Series.php">Peliculas/Series</a></li>
      <li><a href="Mine-World/Videojuegos.php">Videojuegos</a></li>
      <li><a href="Mine-World/Legos.php">Legos</a></li>
      <li><a href="Mine-World/Peluches.php">Peluches</a></li>
      <li><a href="Mine-World/Artesanales.php">Artesanales</a></li>
    </ul>
  </li>

  <li><a href="../Mine-World/contactos.php">Contactos</a></li>
</ul>

    </nav>
  </header>

  <main> 

   <section class="main-accordion-container"></section>
   <div class="card-list"></div>

   <div class="main-accordion-container-2"></div> 
   <div class="card-list-2"></div> 

   <div class="main-accordion-container-3"></div> 
   <div class="card-list-3"></div> 

   <div class="main-accordion-container-4"></div> 
   <div class="card-list-4"></div> 

   <div class="main-accordion-container-5"></div> 
   <div class="card-list-5"></div> 

   <div class="main-accordion-container-6"></div> 
   <div class="card-list-6"></div> 

  </main>

  <script src="script/accordion.js"></script> 
  <script src="script/carrusel.js"></script>
  <script src="script/cards.js"></script>
  <script src="script/hamburger.js"></script>
  
  <script src="script/accordion2.js"></script>  
  <script src="script/cards2.js"></script>

  <script src="script/accordion3.js"></script>  
  <script src="script/cards3.js"></script>

  <script src="script/accordion4.js"></script>  
  <script src="script/cards4.js"></script>

  <script src="script/accordion5.js"></script>  
  <script src="script/cards5.js"></script>

  <script src="script/accordion6.js"></script>  
  <script src="script/cards6.js"></script>


</body>
</html>
