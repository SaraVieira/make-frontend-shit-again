<template>
  <div>
    <section class="container">
      <Page1/>
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
    <div class="container">
      <Page5 />
    </div>

  </div>
</template>

<script>
import Page2 from '~/components/Page2.vue';
import Page3 from '~/components/Page3.vue';
import Page4 from '~/components/Page4.vue';
import Page5 from '~/components/Page5.vue';
import Page1 from '~/components/Page1.vue';
import axios from 'axios';

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

.bottom {
    width: 100vw;
    background: url('../assets/under.gif');
    height: 45px;
    position: absolute;
    bottom: 0;
}

.link {
    width: 125px;
    margin: 10px;
}

.subtitle {
    max-width: 90%;
}
</style>
