<template>
  <section>
    <div>
      <img 
        class="logo" 
        src="../assets/ship.gif" 
        alt="spaceship">
      <h1 class="subtitle ">
        <img 
          src="../assets/make.gif" 
          alt="spaceship">
      </h1>
      <section>
        <h2>
          <marquee>Scroll down for awesomness | Scroll down for awesomness | Scroll down for awesomness |</marquee>
        </h2>
        <img 
          width="30px" 
          src="../assets/scroll-down_blinking.gif">
      </section>

      <h2 class="counter">
        You are user:
      </h2>
      <img 
        width="125" 
        src="http://www.cutercounter.com/hit.php?id=10182&nd=6&style=10" 
        border="0" 
        alt="counter">
    </div>
    <div class="bottom" />
  </section>
</template>

<style scoped>
.logo {
  width: 200px;
}

.counter {
  margin-top: 50px;
}

.bottom {
  width: 100vw;
  background: url("../assets/under.gif");
  height: 45px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
