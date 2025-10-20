<!DOCTYPE html>
<html lang="espanish">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mine World</title>
  <link rel="stylesheet" href="css/estilos.css" />
</head>

<body>
  <header id="header">
    <div class="logo-container">
      <a href="index.php">
         <img src="imagenes/nuevo-logo.png" alt="Mi logo" class="logo" />
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
        <li><a href="index.php">Inicio</a></li>

        <!-- CATEGORÍAS -->
        <li class="dropdown" id="dropdown">
          <a href="#" class="dropbtn">Categorías ▼</a>
          <ul class="dropdown-content">
            <li><a href="#">Anime</a></li>
            <li><a href="#">Peliculas/Series</a></li>
            <li><a href="#">Videojuegos</a></li>
            <li><a href="#">Miniaturas</a></li>
            <li><a href="#">Legos</a></li>
            <li><a href="#">Peluches</a></li>
            <li><a href="#">Artesanales</a></li>
          </ul>
        </li>

        <li><a href="contactos.php">Contactos</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h2>Nuestros productos</h2>
    <div class="card-list"></div>
  </main>

  <script src="script/cards.js"></script>
  <script src="script/hamburger.js"></script>
</body>
</html>
