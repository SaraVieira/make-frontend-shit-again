<template>
  <div>
    <section class="container">
      <Page1/>
    </section>
    <section class="container">
      <Page2 />
    </section>
    <section class="container">
      <Page3 />
    </section>
    <section class="container">
      <Page4 />
    </section>
    <h1 class="center subtitle">
      영감받은 웹사이트:
    </h1>
    <section class="container">
      <a 
        v-for="website in data" 
        :key="website.title" 
        :href="website.url" 
        target="_blank" 
        rel="nofollow noopener"><img 
          :src="website.image || website.logo" 
          :alt="website.title || 'Awesome'" 
          class="website" ></a>
    </section>
    <section class="container">
      <Page5 />
    </section>
  </div>
</template>

<script>
import Page2 from "~/components/Page2.vue"
import Page3 from "~/components/Page3.vue"
import Page4 from "~/components/Page4.vue"
import Page5 from "~/components/Page5.vue"
import Page1 from "~/components/Page1.vue"
import websites from "./data.js"
import axios from "axios"

export default {
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5
  },
  data() {
    return {
      websites,
      data: []
    }
  },
  mounted() {
    this.websites.forEach(website => {
      axios(`https://api.makefrontendshitagain.party/?url=${website}`).then(
        rsp => this.data.push(rsp.data)
      )
    })
  }
}
</script>

<style scoped lang="scss">
.website {
  text-align: center;
  width: 150px;
  height: 150px;
  display: block;
  position: relative;

  &:after {
    content: attr(alt);
    font-size: 16px;
    color: rgb(100, 100, 100);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}

.link {
  width: 125px;
  margin: 10px;
}

.subtitle {
  max-width: 90%;
}
</style>
