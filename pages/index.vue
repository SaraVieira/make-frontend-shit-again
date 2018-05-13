<template>
  <div>
    <section class="container">
      <div>
        <img class="logo" src="../assets/ship.gif" alt="spaceship" />
        <h1 class="subtitle ">
          Make Frontend Shit Again
        </h1>
        <section>
          <h2>Scroll down for awesomness</h2>
          <img width="30px" src="../assets/scroll-down_blinking.gif" />
        </section>
      </div>
    </section>
    <div class="container">
      <Page2 />
    </div>
    <div class="container">
      <Page3 />
    </div>
    <div class="container">
      <Page4 />
    </div>
    <h1 class="center subtitle">
      Inspiration Websites:
    </h1>
    <div class="container">
      <a :key="website" v-for="website in websites" class="link" :href="website">{{website}}</a>
    </div>
  </div>
</template>

<script>
import Page2 from '~/components/Page2.vue';
import Page3 from '~/components/Page3.vue';
import Page4 from '~/components/Page4.vue';
import microlink from 'microlinkjs';

export default {
    components: {
        Page2,
        Page3,
        Page4
    },
    data() {
        return {
            websites: [
                'http://thatsthefinger.com/',
                'http://hooooooooo.com/',
                'http://tinytuba.com/',
                'http://cant-not-tweet-this.com/',
                'http://www.staggeringbeauty.com/',
                'http://eelslap.com/',
                'http://corndog.io/',
                'http://burymewithmymoney.com/',
                'http://www.trypap.com/',
                'https://css-to-my-html.now.sh/',
                'http://www.fallingfalling.com/',
                'http://www.republiquedesmangues.fr/',
                'https://www.lingscars.com/',
                'http://www.partridgegetslucky.com/',
                'http://weirdorconfusing.com/',
                'http://www.rrrgggbbb.com/',
                'http://www.koalastothemax.com/',
                'http://beesbeesbees.com/',
                'https://dan.church/',
                'http://cat-bounce.com/',
                'http://r33b.net/',
                'http://www.sanger.dk/',
                'http://chrismckenzie.com/',
                'http://www.everydayim.com/',
                'https://isxmasafriday13.now.sh/',
                'http://endless.horse/',
                'http://corndogoncorndog.com/',
                'http://www.pointerpointer.com/',
                'http://www.ismycomputeron.com/',
                'http://ninjaflex.com/',
                'http://metaphorsofinfinity.com/',
                'http://imaninja.com/',
                'http://ihasabucket.com/',
                'https://corgiorgy.com/',
                'http://iamawesome.com/',
                'http://www.electricboogiewoogie.com/',
                'http://unicodesnowmanforyou.com/',
                'http://www.wutdafuk.com/',
                'http://www.nullingthevoid.com/',
                'https://www.cameronsworld.net/',
                'http://zombo.com/',
                'http://onemillionlols.com/',
                'https://www.omfgdogs.com/',
                'http://pixelsfighting.com/',
                'http://www.ascii-middle-finger.com/',
                'http://buzzybuzz.biz/',
                'http://yeahlemons.com/'
            ]
        };
    },
    mounted() {
        microlink('.link');
    }
};
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.link {
    width: 125px;
    margin: 10px;
}

h1 {
    font-size: 78px;
}

h2 {
    margin-top: 20px;
}

.center {
    text-align: center;
}
.logo {
    width: 200px;
}

section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
