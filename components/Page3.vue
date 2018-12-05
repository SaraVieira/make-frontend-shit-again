<template>
  <section class="container">
    <div class="top" />
    <ul>
      <li>
        {{ $t('home.ftp') }} <img
          width="150"
          alt=""
          src="../assets/ftp.gif"
        >
      </li>
      <li>
        {{ $t('home.blink') }} <img
          width="200"
          alt=""
          src="../assets/blink.gif"
        >
      </li>
      <li>
        {{ $t('home.html') }} <img
          width="150"
          alt=""
          src="../assets/html.gif"
        >
      </li>
      <li>
        {{ $t('home.jquery') }} <img
          width="150"
          alt=""
          src="../assets/jquery.gif"
        >
      </li>
    </ul>

    <img
      class="image4"
      alt="Welcome to the internet, enjoy the ride"
      src="../assets/37.gif"
    >
    <img
      class="image5"
      alt=""
      src="../assets/37.gif"
    >
  </section>
</template>

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
