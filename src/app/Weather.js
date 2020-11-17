export class Weather {
    constructor(city,countryCode){
        this.apikey='2aa9f2b3fb63006d17deb406ab65a634';
        this.city=city;
        this.countryCode=countryCode;
    }
    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode},&units=metric&appid=${this.apikey}`
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city,countryCode){
        this.city=city;
        this.countryCode=countryCode;
    }
}