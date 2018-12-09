<template>
  <section>
    <div>
      <section class="translations">
        <h2>{{ $t('home.translations') }}</h2>
        <ul>
          <li>
            <nuxt-link
              to="/pt"
              active-class="
              none"
              exact
            >
              <img
                width="25"
                src="../assets/portugal.gif"
                alt=""
              >
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/ru"
              class="Header__Link"
              exact
            >
              <img
                width="25"
                src="../assets/russia.gif"
                alt=""
              >
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="Header__Link"
              exact
            >
              <img
                width="25"
                src="../assets/usa.gif"
                alt=""
              >
            </nuxt-link>
          </li>
          <li>
            <a
              href="https://kr.makefrontendshitagain.party/"
              target="_blank"
              rel="nofollow noopener"
            >
              <img
                width="25"
                src="../assets/korea.gif"
                alt=""
              >
            </a>
          </li>
        </ul>
      </section>
      <img
        class="logo"
        src="../assets/ship.gif"
        :alt="$t('alt.spaceship')"
      >
      <h1 class="subtitle ">
        <img
          src="../assets/make.gif"
          :alt="$t('alt.shit-again')"
        >
      </h1>
      <section>
        <Marquee behavior="alternate">
          &#x3C; {{ $t('home.scroll-down') }} &#x3E;
        </Marquee>
        <img
          width="30"
          alt=""
          src="../assets/scroll-down_blinking.gif"
        >
      </section>

      <h2 class="counter">
        {{ $t('home.user') }}
      </h2>
      <a
        href="http://www.cutercounter.com/"
        target="_blank"
        rel="nofollow noopener"
      >
        <img
          width="125"
          src="http://www.cutercounter.com/hit.php?id=10190&nd=6&style=10"
          border="0"
          alt="1545013"
        >
      </a>
      <img
        src="../assets/baby.gif"
        :alt="$t('alt.baby')"
      >
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

ul {
  display: flex;
}

ul li:not(:last-child) {
  margin-right: 10px;
}

.counter {
  margin-top: 50px;
}

img {
  display: block;
  margin: auto;
}

.translations {
  position: absolute;
  right: 20px;
  top: 0px;
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
