<template>
  <section class="container">
    <img
      class="image3"
      alt="crystal ball"
      src="../assets/crysballbar.gif"
    >
    <div>
      <img
        class="logo"
        src="../assets/ship2.gif"
        alt="spinning spaceship"
      >
      <h1 class="subtitle ">
        <img
          class="fun"
          src="../assets/fun.gif"
          alt="Remember when frontend was fun?"
        >
      </h1>
    </div>
    <img
      class="image4"
      alt="hotdog swinging a baseball bat"
      src="../assets/hotdog.gif"
    >
    <img
      class="image5"
      alt=""
      src="../assets/hotdog.gif"
    >
  </section>
</template>

<style scoped>
.container {
  background: url("../assets/bg-1.png");
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
</style>
