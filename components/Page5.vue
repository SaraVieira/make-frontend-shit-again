<template>
  <section class="container">
    <h1>
      {{ $t('home.make-websites') }}
      <br> {{ $t('home.fun-again') }}
    </h1>
    <div>
      <img
        src="../assets/10.gif"
        :alt="$t('alt.heart')"
      >
      <p>
        {{ $t('home.website-made') }}
        <a href="https://twitter.com/NikkitaFTW ">
          {{ $t('home.name') }}
        </a>{{ $t('home.at-hackaton') }}
      </p>
      <p>
        {{ $t('home.code-at') }}
        <a href="https://github.com/SaraVieira/make-frontend-shit-again ">
          {{ $t('home.gh') }}
        </a>
      </p>
    </div>
    <section class="badges">
      <img
        src="../assets/valid-html40.png"
        :alt="$t('alt.valid-html')"
      >
      <img
        src="../assets/w3c-css.gif"
        :alt="$t('alt.css')"
      >
      <a
        rel="nofollow noopener"
        href="http://www.oldversion.com/windows/netscape-3-04"
        target="_blank"
      >
        <img
          src="../assets/netscape.gif"
          :alt="$t('alt.netscape')"
        >
      </a>
    </section>
    <div class="bottom " />
    <div class="top bottom " />
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

.badges {
  margin: 20px auto;
}

.top {
  top: 0;
}

h1 {
  max-width: 80%;
  margin-bottom: 20px;
}
</style>
