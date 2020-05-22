<template>
  <Layout
    bannerImgName="gallery/banner-gallery"
    bannerText="Lorem ipsum dolor sit amet"
  >
    <main class="main">
      <section class="group contact">
        <h2 class="group__title">Contactenos</h2>
        <div class="container container--flex">
          <div class="contact-information column column--50">
            <h3 class="column__title">Informacion de contacto</h3>
            <p class="column__txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eligendi delectus, aperiam voluptatem unde, incidunt consequuntur
              maiores corporis voluptas repellat soluta.
            </p>
            <p class="column__txt">
              <span class="icon-phone"></span> Telefono 1: 999-999-999
            </p>
            <p class="column__txt">
              <span class="icon-phone"></span> Telefono 2: 555-555-555
            </p>
            <p class="column__txt">
              <span class="icon-location"></span> Urb. XXX-XXX-XXX
            </p>
            <p class="column__txt">
              <span class="icon-mail"></span> consultas@consultas.com
            </p>
            <div class="social-icon">
              <a href="" class="social-icon__link"
                ><span class="icon-facebook"></span
              ></a>
              <a href="" class="social-icon__link"
                ><span class="icon-instagram"></span
              ></a>
              <a href="" class="social-icon__link"
                ><span class="icon-mail"></span
              ></a>
            </div>
          </div>
          
          <Form />
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
  import Layout from '@/components/layout/Layout';
  import Form from '@/components/shared/Form';

  export default {
    name: 'Contact',
    components: {
      Layout,
      Form
    }
  };
</script>

<style lang="scss" scoped>
  .contact-information {
    padding: 10px;
    padding-top: 0;
    margin-bottom: 30px;
    border-bottom: 1px solid #de423a;
  }
  .contact-information .column__title {
    font-family: 'Pacifico', cursive;
    font-weight: 100;
  }
  .contact-information [class*='icon-'] {
    font-size: 1.3em;
    margin-right: 7px;
    position: relative;
    top: 5px;
  }
  .contact-information .social-icon {
    justify-content: flex-start;
    margin-top: 10px;
  }
  .contact-information .social-icon[class*='icon-'] {
    background: black;
    color: white;
    margin-left: 0;
    margin-right: 15px;
  }

  @media screen and (min-width: 480px) {
    .contact .container--flex {
      align-items: flex-start;
    }
    .contact-information p {
      font-size: 0.8em;
    }
    .contact-information {
      border-right: 1px solid #de423a;
      border-bottom: none;
    }
  }
  @media screen and (min-width: 768px) {
    .contact-information p {
      font-size: 1em;
    }
    .contact-information .column__title {
      font-size: 1.5em;
    }
  }
</style>
