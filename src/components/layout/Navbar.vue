<template>
  <nav class="main-nav">
    <div class="container container--flex">
      <!----------------Icon MENU---------------->
      <span class="icon-menu" id="btnmenu" @click="toggleMenu"></span>
      <ul class="menu" id="menu" :class="{ mostrar: viewMenu }">
        <li class="menu__item">
          <router-link to="/" class="menu__link">Inicio</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/about" class="menu__link">Nosotros</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/gallery" class="menu__link">Galeria</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/contact" class="menu__link">Contacto</router-link>
        </li>
      </ul>
      <div class="social-icon">
        <a href="" class="social-icon__link"
          ><span class="icon-facebook"></span
        ></a>
        <a href="" class="social-icon__link"
          ><span class="icon-instagram"></span
        ></a>
        <a href="" class="social-icon__link"><span class="icon-mail"></span></a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        viewMenu: false
      };
    },
    methods: {
      toggleMenu() {
        this.viewMenu = !this.viewMenu;
      }
    }
  };
</script>

<style lang="scss">
  /*--------------------------- Estilos menu -----------------------------------*/

  .main-nav {
    width: 100%;
    position: relative;
    z-index: 2000;
    padding: 10px;

    .router-link-exact-active {
      background: #de423a;
    }
  }
  .icon-menu {
    display: block;
    color: white;
    border: 1px solid white;
    border-radius: 3px;
    width: 40px;
    height: 40px;
    line-height: 45px;
    text-align: center;
    cursor: pointer;
    font-size: 1.5em;
  }
  .social-icon {
    display: flex;
    justify-content: space-between;
  }
  .social-icon [class*='icon-'] {
    color: black;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
  }
  .social-icon__link {
    text-decoration: none;
  }
  .menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.85);
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    height: 0;
    overflow: hidden;
    transition: height 0.3s linear;
  }
  .menu__link {
    display: block;
    padding: 15px;
    color: white;
    text-decoration: none;
  }
  .menu__link:hover {
    background: #de423a;
  }
  .menu__link--select {
    background: #de423a;
  }
  .mostrar {
    height: 196px;
  }
</style>
