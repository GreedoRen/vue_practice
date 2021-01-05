export default {
    methods: {
        async fetchWeaher(city, API_KEY, units, lang) {
            let weather = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}&lang=${lang}`
            ).then((res) => res.json());
      
            if (weather && weather.cod === 200) {
              this.findedObject = weather;
      
              this.srcLogo();
            }
        }
    }
}