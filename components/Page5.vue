<template>
  <section class="container">
    <h1>
      We used to make websites because it was fun and at a point we lost the way.
      <br > We need to make dumb shit! Make useless stuff; make the web fun again!
    </h1>
    <div>
      <img src="../assets/10.gif" >
      <p>Website made by
      <a href="https://twitter.com/NikkitaFTW ">Sara Vieira</a> at a Hackathon </p>
      <p>Source code at
        <a href="https://github.com/SaraVieira/make-frontend-shit-again ">GitHub</a>
      </p>
    </div>
    <div class="bottom "/>
    <div class="top bottom "/>
  </section>
</template>

<style scoped>
.container {
  background: url("../assets/bg5.png");
  flex-direction: column;
}

.bottom {
  background: url("../assets/16.gif");
  width: 100vw;
  height: 15px;
  position: absolute;
  bottom: 0;
}
.top {
  top: 0;
}

h1 {
  max-width: 80%;
  margin-bottom: 20px;
}
</style>
