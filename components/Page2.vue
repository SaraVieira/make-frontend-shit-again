<template>
  <section class="container">
    <img class="image3" src="../assets/crysballbar.gif" />
    <div>
      <img class="logo" src="../assets/ship2.gif" alt="spaceship" />
      <h1 class="subtitle ">
        <img class="fun" src="../assets/fun.gif" alt="spaceship" />
      </h1>
    </div>
    <img class="image4" src="../assets/hotdog.gif" />
    <img class="image5" src="../assets/hotdog.gif" />
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
    position: relative;
    align-items: center;
    text-align: center;
    background: url('../assets/bg-1.png');
}

h1 {
    font-size: 78px;
    color: black;
}

.image4 {
    position: absolute;
    left: 0;
    bottom: 0;
}

.image5 {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: scaleX(-1);
}

h2 {
    margin-top: 20px;
}

.logo {
    width: 200px;
}

.fun {
    max-width: 90%;
    text-align: center;
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
