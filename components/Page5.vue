<template>
  <section class="container">
    <h1>
      우리는 웹사이트 만드는 것이 재미있어서 만들었으나, 어느 순간 길을 잃었습니다.
      <br> 우리는 멍청한 쓰레기를 만들어야 합니다! 쓸모 없는 것을 만들고 웹을 다시 재미있게 만드세요!
    </h1>
    <div>
      <img 
        src="../assets/10.gif" 
        alt="heart">
      <p><a href="https://twitter.com/NikkitaFTW ">Sara Vieira</a> 이 해커톤에서 제작함 </p>
      <p>소스코드 : <a href="https://github.com/SaraVieira/make-frontend-shit-again ">GitHub</a>
      </p>
      <p>번역 : <a href="https://fb.com/katter.gil">길범준</a></p>
    </div>
    <section class="badges">
      <img 
        src="../assets/valid-html40.png" 
        alt="valid html" >
      <img 
        src="../assets/w3c-css.gif" 
        alt="valid css" >
      <img 
        src="../assets/netscape.gif" 
        alt="valid html" >
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
