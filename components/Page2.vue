<template>
  <section class="container">
    <div>
      <img class="logo" src="../assets/ship2.gif" alt="spaceship" />
      <h1 class="subtitle ">
        Remeber when Frontend was fun ?
      </h1>
    </div>
  </section>
</template>

<script>
import Page2 from '~/components/Page2.vue';

export default {
    components: {
        Page2
    }
};
</script>

<style scoped>
.container {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('../assets/bg-1.png');
}

h1 {
    font-size: 78px;
    color: black;
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
