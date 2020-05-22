<template>
  <Layout bannerImgName="nosotros1" bannerText="Lorem ipsum dolor sit amet">
    <main class="main">

      <GroupText
        title="Acerca de nosotros"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            nam, fugit. Molestias iusto officia nostrum beatae autem quia."
      />

      <section class="group our-team">
        <h2 class="group__title">Nuestro equipo</h2>
        <div class="container container--flex">
          <div class="column column--33">
            <h3 class="our-team__title">Name 1</h3>
            <img
              src="@/assets/img/nosotros2.jpeg"
              alt=""
              class="our-team__img"
            />
            <p class="our-team__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, a
              et. In veniam, architecto nam debitis sunt corrupti nulla tenetur
              eveniet mollitia sed consequuntur maiores expedita modi magni.
              Numquam, ipsam?
            </p>
          </div>
          <div class="column column--33">
            <h3 class="our-team__title">Name 2</h3>
            <img
              src="@/assets/img/nosotros3.jpg"
              alt=""
              class="our-team__img"
            />
            <p class="our-team__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, a
              et. In veniam, architecto nam debitis sunt corrupti nulla tenetur
              eveniet mollitia sed consequuntur maiores expedita modi magni.
              Numquam, ipsam?
            </p>
          </div>
          <div class="column column--33">
            <h3 class="our-team__title">Name 3</h3>
            <img
              src="@/assets/img/nosotros3.jpg"
              alt=""
              class="our-team__img"
            />
            <p class="our-team__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, a
              et. In veniam, architecto nam debitis sunt corrupti nulla tenetur
              eveniet mollitia sed consequuntur maiores expedita modi magni.
              Numquam, ipsam?
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
  import Layout from '@/components/layout/Layout.vue';
  import GroupText from '../components/shared/GroupText';

  export default {
    name: 'About',
    components: {
      GroupText,
      Layout
    }
  };
</script>

<style lang="scss" scoped>
  .our-team {
    text-align: center;
    margin-bottom: 20px;
  }
  .our-team .container__flex {
    align-items: flex-start;
  }
  .our-team__title {
    font-family: 'Pacifico', cursive;
    color: #de423a;
    font-weight: bold;
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  .our-team__img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 20px;
  }
  .our-team__txt {
    padding: 10px;
  }

  @media screen and (min-width: 480px) {
    .our-team__img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    .our-team__img {
      width: 220px;
      height: 220px;
    }
  }
  @media screen and (min-width: 1024px) {
    .our-team__img {
      width: 300px;
      height: 300px;
    }
    .our-team__title {
      font-size: 2.5em;
    }
  }

  @media screen and (min-width: 1600px) {
    .our-team__img {
      width: 400px;
      height: 400px;
    }
  }
</style>
