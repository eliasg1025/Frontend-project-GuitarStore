<template>
  <div class="modal" id="modal" :class="{ 'modal--open': view }">
    <div class="modal__content">
      <slot />
    </div>
    <div class="modal__boton" id="modal__boton" @click="closeModal">X</div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    data() {
      return {
        view: false
      };
    },
    methods: {
      openModal() {
        this.view = true;
      },
      closeModal() {
        this.view = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .modal {
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    display: none;
  }
  .modal__content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .modal__boton {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: #de423a;
    font-size: 2em;
    text-align: center;
    border-radius: 50%;
    font-family: monospace;
  }
  .modal--open {
    display: block;
  }
</style>
