<template>
  <div class="container">
    <input
      class="search_text"
      @input="fetchWeaher"
      v-model="city"
      type="text"
    />

    <div class="search_container">
      <span class="search_city">{{ findedObject.name }}</span>
      <span class="search_date"></span>

      <span class="temperature">{{
        findedObject !== "" ? findedObject.main.temp : ""
      }}</span>
      <div class="weather">
        <span>{{
          findedObject !== "" ? findedObject.weather[0].description : ""
        }}</span>
        <img :src="logoSrc" alt="logo" />
      </div>
      <span class="cloud"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "weather",
  data() {
    return {
      API_KEY: "5476758be27e93d367c94a3a966b9d5f",
      city: "",
      units: "metric", // button,
      lang: "ru", //button
      findedObject: "",
      logoSrc: "",
    };
  },
  methods: {
    async fetchWeaher() {
      let weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&appid=${this.API_KEY}&lang=${this.lang}`
      ).then((res) => res.json());

      if (weather && weather.cod === 200) {
        console.log(weather);
        this.findedObject = weather;

        this.srcLogo();
      }
    },

    srcLogo() {
      return (this.logoSrc =
        this.findedObject !== ""
          ? `http://openweathermap.org/img/wn/${this.findedObject.weather[0].icon}@2x.png`
          : "");
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>