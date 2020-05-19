<template>
  <div class="main-layout">
    <section class="banner">
      <img :src="image" alt="" class="banner__img" />
      <div class="banner__content">{{ bannerText }}</div>
    </section>

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
  export default {
    props: {
      bannerImgName: String,
      bannerText: String
    },
    computed: {
      image() {
        return require(`@/assets/img/${this.bannerImgName}.jpeg`);
      }
    }
  };
</script>

<style></style>
