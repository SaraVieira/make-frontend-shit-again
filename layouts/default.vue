<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("contextmenu", event => {
      event.preventDefault()
      alert("우클릭은 금지되어 있습니다!!!")
    })
  }
}
</script>

<style>
@import url("../fonts/unvada.css");
html {
  font-family: "Unvada", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: white;
  background-image: url("../assets/bg.png");
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  cursor: url("../assets/cursor.gif"), auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1 {
  font-size: 60px;
}

p {
  font-size: 18px;
}

a {
  color: lightblue;
}

.center {
  text-align: center;
}

h2 {
  margin-top: 20px;
}

.container {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}
</style>
