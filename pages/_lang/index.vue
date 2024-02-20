<template>
  <div>
    <audio
      src="/Movie_Themes_-_Titanic_-_My_Heart_Will_Go_On_(Techno_Mix).mp3"
      autoplay
      controls
      preload="auto"
    />
    <section class="container">
      <Page1 />
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
      {{ $t("home.inspiration") }}
    </h1>
    <section class="container websites">
      <div
        v-for="website in data"
        :key="website.url"
      >
        <a
          :href="website.url"
          target="_blank"
          rel="nofollow noopener"
        >
          {{ website.name }}
        </a>
      </div>
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
import websites from "../data.js"
import axios from "axios"

export default {
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
  },
  data() {
    return {
      websites,
      data: [],
    }
  },
  mounted() {
    document.querySelector("audio").play()
    this.websites.forEach((website) => {
      this.data.push({
        url: website,
        name: website.replace(/^https?\:\/\//i, "").split("/")[0],
      })
    })
  },
}
</script>

<style scoped lang="scss">
audio {
  position: absolute;
  z-index: 10;
}

.container.websites {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 20px auto;
  max-width: 80vw;

  a {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 2px;
    max-width: 200px;
    display: block;
    word-wrap: break-word;
    word-break: break-all;
    color: black;
    font-size: 1.2em;
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
