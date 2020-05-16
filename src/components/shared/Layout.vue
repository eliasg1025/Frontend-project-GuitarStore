<template>
  <div class="main-layout">
    <section class="banner">
      <!-- <img src="../../assets/banner.jpeg" alt="" class="banner__img" /> -->
      <img :src="image" alt="" class="banner__img" />
      <div class="banner__content">{{ bannerText }}</div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['bannerImgName', 'bannerText'],
    computed: {
      image() {
        return require(`@/assets/img/${this.bannerImgName}.jpeg`);
      }
    }
  };
</script>

<style></style>
