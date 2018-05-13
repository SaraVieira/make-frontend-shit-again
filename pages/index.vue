<template>
  <div>
    <section class="container">
      <div>
        <img class="logo" src="../assets/ship.gif" alt="spaceship" />
        <h1 class="subtitle ">
          <img src="../assets/make.gif" alt="spaceship" />
        </h1>
        <section>
          <h2>
            <marquee>Scroll down for awesomness</marquee>
          </h2>
          <img width="30px" src="../assets/scroll-down_blinking.gif" />
        </section>
      </div>
      <div class="page1 bottom"></div>
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
      <a :key="website.title" v-for="website in data" target="_blank" rel="nofollow noopener" :href="website.url"><img class="website" :src="website.image || website.logo" :alt="website.title || 'Awesome'" /></a>
    </div>
    <div class="container bg5">
      <h1 class="subtitle">
        We used to make websites because it was fun and at a point we lost the way.
        <br /> We need to make dumb shit! Make useless stuff, make the web fun again!
      </h1>
      <div>
        <img src="../assets/10.gif" />
        <p>Website made by
          <a href="https://twitter.com/NikkitaFTW">Sara Vieira</a> at a Hackathon </p>
        <p>Source code at
          <a href="https://github.com/SaraVieira/make-frontend-shit-again">Github</a>
        </p>
      </div>
      <div class="bottom"></div>
      <div class="top bottom"></div>
    </div>

  </div>
</template>

<script>
import Page2 from '~/components/Page2.vue';
import Page3 from '~/components/Page3.vue';
import Page4 from '~/components/Page4.vue';
import axios from 'axios';

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
                'https://gifcities.org/',
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
                'http://yeahlemons.com/',
                'http://www.111111111111111111111111111111111111111111111111111111111111.com/',
                'http://fastcashmoneyplus.biz/',
                'https://brucewillis.sexy/',
                'https://rms.sexy/',
                'https://goatattack.com/',
                'https://golfcl.app/'
            ],
            data: []
        };
    },
    mounted() {
        this.websites.map(website => {
            axios(
                `https://api.makefrontendshitagain.party/?url=${website}`
            ).then(rsp => this.data.push(rsp.data));
        });
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
    position: relative;
}

.website {
    text-align: center;
    width: 150px;
    height: 150px;
    display: block;
    position: relative;
}

.website:after {
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

p {
    font-size: 18px;
}

a {
    color: lightblue;
}

.bottom {
    background: url('../assets/16.gif');
    width: 100vw;
    height: 15px;
    position: absolute;
    bottom: 0;
}

.page1 {
    background: url('../assets/under.gif');
    height: 45px;
}

.top {
    top: 0;
}

.bg5 {
    background: url('../assets/bg5.png');
}

.link {
    width: 125px;
    margin: 10px;
}

h1 {
    font-size: 60px;
}

h2 {
    margin-top: 20px;
}
.subtitle {
    max-width: 90%;
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
