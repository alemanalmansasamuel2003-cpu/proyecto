<?php 
$page = "artesanales"; // ✅ Nombre de la categoría
require_once "../vistas/vista_superior.php";
?>

<!-- CSS -->
<link rel="stylesheet" href="../css/estilos.css">
<link rel="stylesheet" href="../css/categorias-estilos.css"> <!-- Si quieres estilos únicos -->

<!-- Contenido principal -->
<main class="anime-main">
  <h2 class="titulo-anime">Figuras Artesanales</h2>

  <!-- Galería dinámica -->
  <section id="anime-gallery" class="anime-gallery"></section>
</main>



<!-- Scripts -->
<script src="../script/artesanales.js"></script> <!-- ✅ Nuevo archivo JS -->
<script src="../script/hamburger.js"></script>
