<template>
  <section class="container">
    <ul>
      <li>Remeber FTP ? <img width="150" src="../assets/ftp.gif" /></li>
      <li>Remeber Blink ? <img width="200" src="../assets/blink.gif" />
      </li>
      <li>Remeber HTML ? <img width="150" src="../assets/html.gif" /></li>
      <li>Remeber jQuery ? <img width="150" src="../assets/jquery.gif" /></li>
    </ul>
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
