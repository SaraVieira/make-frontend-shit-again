<template>
  <section class="container">
    <div class="top" />
    <ul>
      <li>FTP를(을) 기억하시나요? <img 
        width="150" 
        alt="ftp" 
        src="../assets/ftp.gif"></li>
      <li>Blink를(을) 기억하시나요? <img 
        width="200" 
        alt="blink" 
        src="../assets/blink.gif">
      </li>
      <li>HTML를(을) 기억하시나요? <img 
        width="150" 
        alt="html" 
        src="../assets/html.gif"></li>
      <li>jQuery를(을) 기억하시나요? <img 
        width="150" 
        alt="jqury" 
        src="../assets/jquery.gif"></li>
    </ul>

    <img 
      class="image4" 
      alt="doplhin" 
      src="../assets/37.gif">
    <img 
      class="image5" 
      alt="doplhin" 
      src="../assets/37.gif">
  </section>
</template>

<script>
import Page2 from "~/components/Page2.vue"

export default {
  components: {
    Page2
  }
}
</script>

<style scoped lang="scss">
.container {
  background: url("../assets/bg-3.png");
}

.top {
  width: 100%;
  position: absolute;
  top: 0;
  height: 43px;
  background: url("../assets/baloons.gif");
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
