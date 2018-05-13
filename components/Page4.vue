<template>
  <section class="container">
    <div>
      <img class="logo" src="../assets/dope.gif" alt="spaceship" />
    </div>
    <img class="image1" src="../assets/debuggingthemind.gif" />
    <img class="image2" src="../assets/frontend1.gif" />
    <img class="image3" src="../assets/pizzalove.gif" />
  </section>
</template>

<style scoped>
.container {
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('../assets/bg4.png');
}

img {
    position: absolute;
}

.image3 {
    right: 0;
    top: 0;
}

.image2 {
    left: 0;
    top: 0;
}

.logo {
    position: relative;
    z-index: 10;
}
</style>
