<template>
  <div>
    <!-- v-if and v-else -->
    <h1 v-if="false"> {{Wintersaison}}</h1>
    <h1 v-else="true"> {{Sommersaison}}</h1>

    <div id="overlay" @click="overlayOff()">
      <div id="text"> Erhalte 10% Rabatt auf einen Kurs deiner Wahl! <br> Code: E7E7E7 </div>
    </div>
    <a @click="overlayOn()"> <strong>Rabattcode sammeln!</strong> </a>

    <!-- v-for -->
    <div class="row" v-for="(activity) in activities">
      <div class="col-md-3 box">
        <img :src="activity.img" alt="picture">
        <h1 v-show="true" v-text="activity.mytext">Loading...</h1>
        <h2 v-show="true" v-html="activity.myhtml" />
        <p> Lerne mit: {{fullName(activity)}}</p>
        <a
            :href="activity.link.url"
            :target="activity.link.target"
            :tabindex="activity.link.tabindex"
            v-text="activity.link.title"
        />
      </div>
    </div>
  </div>
</template>

<style>
.box {
  background-color: transparent;
  margin: 100px 100px;
}
#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
#text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
</style>

<script>
export default {
  data() {
    return {
      // v-if and v-else
      Wintersaison: 'Mach dich bereit für den Sommer',
      Sommersaison: 'Der Sommer ist da',
      activities: [
        {
          img: require('../assets/diving.png'),
          // v-text
          mytext: 'Tauchen',
          // v-html
          myhtml: 'Tauche ab und entdecke die mysteriöse Tiefe und Schönheit des Zürichsees <br/>',
          // v-bind
          link: {
            url: 'https://www.tauchschule-poseidon.ch/',
            target: '_blank',
            tabindex: '0',
            title: 'Tauschule in Zürich finden'
          },
          firstName: 'Saskia',
          lastName: 'Hunkeler'
        },
        {
          img: require('../assets/stand-up-paddle.png'),
          // v-text
          mytext: 'Stand Up Paddle',
          // v-html
          myhtml: 'Wenn Wissen und Gelassenheit sich gegenseitig ergänzen, entsteht Harmonie und Ordnung <br/>',
          // v-bind
          link: {
            url: 'https://www.kiteswiss.ch/kurse-touren/sup-kurse',
            target: '_blank',
            tabindex: '0',
            title: 'Stand-Up-Paddle-Kurse'
          },
          firstName: 'Rene',
          lastName: 'Sachsen'
        },
        {
          img: require('../assets/surfing.png'),
          // v-text
          mytext: 'Surfing',
          // v-html
          myhtml: 'Werde eins mit den Wellen und ihrer eleganten Wucht unter dem Board <br/>',
          // v-bind
          link: {
            url: 'https://urbansurf.ch/de/',
            target: '_blank',
            tabindex: '0',
            title: 'Surfkurse'
          },
          firstName: 'Laura',
          lastName: 'Celina'
        }
      ],
      }
    },
    computed: {
     /* fullName() {
      //return `${this.activities.firstName} ${this.activities.lastName}`
      return this.activities.firstName + ' '
          + this.activities.lastName;
      }*/
   },
  methods: {
    fullName(obj) {
      //return `${this.activities.firstName} ${this.activities.lastName}`
      return obj.firstName + ' '
          + obj.lastName;
    },
    overlayOn(n) {
      document.getElementById("overlay").style.display = "block";
      this.index = n;
    },
    overlayOff() {
      document.getElementById("overlay").style.display = "none";
    },
  },
}

</script>