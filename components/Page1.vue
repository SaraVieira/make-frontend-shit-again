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
        <marquee>스크롤하여 멋진 것들을 만나보세요~! | 스크롤하여 멋진 것들을 만나보세요*^^*  | 스크롤하여 멋진 것들을 만나보세용~ |</marquee>
        <img 
          width="30" 
          alt="scroll" 
          src="../assets/scroll-down_blinking.gif">
      </section>

      <h2 class="counter">
        방문자 카운터 *^^*
      </h2>
      <a 
        href="http://www.cutercounter.com/" 
        target="_blank"><img 
          width="125" 
          src="http://www.cutercounter.com/hit.php?id=10190&nd=6&style=10" 
          border="0" 
          alt="free counter"></a>
      <img 
        src="../assets/baby.gif" 
        alt="baby dancing">
    </div>
    <div class="bottom" />
  </section>
</template>

<style scoped>
.logo {
  width: 200px;
}

marquee {
  margin-top: 20px;
  display: block;
  font-size: 1.5em;
  font-weight: bold;
}

.counter {
  margin-top: 50px;
}

img {
  display: block;
  margin: auto;
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
