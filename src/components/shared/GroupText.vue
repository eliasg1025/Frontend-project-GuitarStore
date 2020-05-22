<template>
  <section class="group group--color">
    <div class="container">
      <h2 class="main__title">{{ title }}</h2>
      <p class="main__txt">
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'GroupText',
    props: {
      title: String,
      text: Text
    }
  };
</script>

<style scoped></style>
