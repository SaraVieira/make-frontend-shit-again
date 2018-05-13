<template>
  <div>
    <section class="container">
      <div>
        <img class="logo" src="../assets/ship.gif" alt="spaceship" />
        <h1 class="subtitle ">
          Make Frontend Shit Again
        </h1>
        <section>
          <h2>Scroll down for awesomness</h2>
          <img width="30px" src="../assets/scroll-down_blinking.gif" />
        </section>
      </div>
    </section>
    <div class="container">
      <Page2 />
    </div>
    <div class="container">
      <Page3 />
    </div>
    <div class="container">
      <Page4 />
    </div>

  </div>
</template>

<script>
import Page2 from '~/components/Page2.vue';
import Page3 from '~/components/Page3.vue';
import Page4 from '~/components/Page4.vue';

export default {
    components: {
        Page2,
        Page3,
        Page4
    }
};
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h1 {
    font-size: 78px;
}

h2 {
    margin-top: 20px;
}

.logo {
    width: 200px;
}

section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.arrowAnim {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
