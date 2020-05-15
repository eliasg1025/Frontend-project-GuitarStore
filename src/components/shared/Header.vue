<template>
  <header class="main-header">
    <div class="container container--flex">
      <div class="logo-container column column--50">
        <h1 class="logo">Guitar Store</h1>
      </div>
      <div class="main-header__contactInfo column column--50">
        <p class="main-header__contactInfo__phone">
          <span class="icon-phone">999-999-999</span>
        </p>
        <p class="main-header__contactInfo__address">
          <span class="icon-location">Urb. XXXXXX - XXXX - Peru</span>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  };
</script>

<style lang="scss">
  /*--------------------------- Estilos header -----------------------------------*/

  .main-header {
    width: 100%;
  }
  .logo {
    font-size: 1.8em;
    color: #de423a;
    padding: 10px;
    font-family: 'Pacifico', sans-serif;
    font-weight: 100;
  }
  .main-header__contactInfo__phone {
    background: #de423a;
    color: white;
    margin: 0 auto;
    padding: 10px;
  }
  .main-header__contactInfo__address {
    margin: 0;
    padding: 10px;
  }
  .main-header [class*='icon-']::before {
    position: relative;
    top: 2px;
    right: 5px;
  }
</style>
