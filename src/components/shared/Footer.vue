<template>
  <footer class="main-footer">
    <div class="container container--flex">
      <div class="column column--33">
        <h2 class="column__title">¿Por que visitarnos?</h2>
        <p class="column__txt">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="column column--33">
        <h2 class="column__title">Contactanos</h2>
        <p class="column__txt">Urb. XXXXXX - XXXX - Peru</p>
        <p class="column__txt">Telefono 999-999-999</p>
        <p class="column__txt">consultas@guitarstore.com</p>
      </div>
      <div class="column column--33">
        <h2 class="column__title">Siguenos en nuestras redes</h2>
        <p class="column__txt"><a href="" class="icon-facebook">Facebook</a></p>
        <p class="column__txt">
          <a href="" class="icon-instagram">Siguenos en Instagram</a>
        </p>
        <p class="column__txt">
          <a href="" class="icon-youtube">Visita nuestro canal</a>
        </p>
      </div>
      <p class="copy">© GuitarStore | Desarrollado por Elias Guere</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style>
  /*----------------------------Estilos footer---------------------------------*/

  .main-footer {
    background: #222;
    color: white;
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 0.8em;
  }
  .copy {
    text-align: center;
    margin: auto;
    margin-top: 15px;
  }

  .main-footer [class*='icon-'] {
    color: white;
    text-decoration: none;
  }
  .main-footer [class*='icon-']::before {
    position: relative;
    top: 3px;
    right: 5px;
  }
</style>
