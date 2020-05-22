<template>
  <Layout bannerImgName="banner" bannerText="Lorem ipsum dolor sit amet">
    <main class="main">

      <GroupText
        title="Bienvenido a nuestra store"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
                nam, fugit. Molestias iusto officia nostrum beatae autem quia,
                temporibus vitae aspernatur adipisci neque vero facilis, officiis
                fugit quam ducimus recusandae."
      />

      <section class="group main__about__descirption">
        <div class="container container--flex">
          <div class="column column--50">
            <img src="@/assets/img/ourstore.jpeg" alt="" />
          </div>
          <div class="column column--50">
            <h3 class="column__title">Lorem ipsum dolor sit amet</h3>
            <p class="column__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a href="" class="btn btn--contact">Contact</a>
          </div>
        </div>
      </section>

      <section class="group best-models">
        <h2 class="group__title">Nuestros mejores modelos</h2>
        <div class="container container--flex">
          <div class="column column--50-25">
            <img
              src="@/assets/img/guitar1.jpeg"
              alt=""
              class="best-models__img"
            />
            <div class="best-models__title">Modelo 1</div>
            <div class="best-models__price">$99</div>
          </div>
          <div class="column column--50-25">
            <img
              src="@/assets/img/guitar2.jpeg"
              alt=""
              class="best-models__img"
            />
            <div class="best-models__title">Modelo 2</div>
            <div class="best-models__price">$99</div>
          </div>
          <div class="column column--50-25">
            <img
              src="@/assets/img/guitar3.jpeg"
              alt=""
              class="best-models__img"
            />
            <div class="best-models__title">Modelo 3</div>
            <div class="best-models__price">$99</div>
          </div>
          <div class="column column--50-25">
            <img
              src="@/assets/img/guitar4.jpeg"
              alt=""
              class="best-models__img"
            />
            <div class="best-models__title">Modelo 4</div>
            <div class="best-models__price">$99</div>
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
    name: 'Home',
    components: {
      Layout,
      GroupText
    }
  };
</script>
