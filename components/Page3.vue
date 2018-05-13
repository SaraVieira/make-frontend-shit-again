<template>
  <section class="container">
    <div class="top" />
    <ul>
      <li>Remember FTP ? <img width="150" src="../assets/ftp.gif" /></li>
      <li>Remember Blink ? <img width="200" src="../assets/blink.gif" />
      </li>
      <li>Remember HTML ? <img width="150" src="../assets/html.gif" /></li>
      <li>Remember jQuery ? <img width="150" src="../assets/jquery.gif" /></li>
    </ul>

    <img class="image4" src="../assets/37.gif" />
    <img class="image5" src="../assets/37.gif" />
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

<style scoped lang="scss">
.container {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('../assets/bg-3.png');
    position: relative;
}

.top {
    width: 100%;
    position: absolute;
    top: 0;
    height: 43px;
    background: url('../assets/baloons.gif');
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

h1 {
    font-size: 78px;
    color: black;
}
ul li {
    font-size: 35px;
    color: black;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    img {
        margin-left: 20px;
    }
}
</style>
