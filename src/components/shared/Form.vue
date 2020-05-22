<template>
	<form action="" method="POST" class="formulario column column--50">
    <label for="" class="formualario__label">Nombre: </label>
    <input type="text" class="formulario__input-txt" name="nombre" />
    <label for="" class="formualario__label">Correo: </label>
    <input type="text" class="formulario__input-txt" name="correo" />
    <label for="" class="formualario__label">Telefono: </label>
    <input type="text" class="formulario__input-txt" name="telefono" />
    <label for="" class="formualario__label">Mensaje: </label>
    <textarea
      name="mensaje"
      id=""
      cols="30"
      rows="10"
      class="formulario__textarea"
    ></textarea>
    <input type="submit" class="btn formulario__btn" value="Enviar" @click="submit" />
  </form>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
      }
    },
    methods: {
      submit(e) {
        e.preventDefault();
        console.log('sending');
      }
    }
  }
</script>

<style scoped>
  .formulario {
    padding: 10px;
    padding-top: 0;
  }
  .formulario__label,
  .formulario__input-txt,
  .formulario__textarea {
    display: block;
    width: 100%;
  }
  .formulario__input-txt {
    padding: 10px;
    margin-bottom: 10px;
  }
  .formulario__textarea {
    min-height: 100px;
    min-width: 100%;
    max-width: 100%;
    max-height: 200px;
  }
  .formulario__btn {
    border: none;
    cursor: pointer;
    font-size: 1em;
  }
</style>
