
class Forcast{
    constructor(){
        this.key="wZ9QYcAGjAo27UtRAgtsrGn8fLLP9i1s";
        this.WeatherUI="http://dataservice.accuweather.com/currentconditions/v1/";
        this.CityUI="http://dataservice.accuweather.com/locations/v1/cities/search";
    }
    async updatecity(city){
        const city1=await this.getcity(city);
        const weather = await  this.getweather(city1.Key);
        //returning object
        return{city1,weather};
    };
    async getcity(city){
    const query=`?apikey=${ this.key }&q=${ city }`;
    const response=await fetch(this.CityUI  +query);
    const data=await response.json();
    return data[0];
    };
    async getweather(id){
    const query=`${id}?apikey=${this. key}`;
    const response=await fetch(this.WeatherUI +query);
    const data=await response.json();

    return data[0];
    };
}
