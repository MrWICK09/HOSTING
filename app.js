const cityform=document.querySelector("form");
// for card class
const card=document.querySelector(".card");
const details=document.querySelector(".details");

// FOR image and icon

const time=document.querySelector("img.time");
const icon=document.querySelector(".icon img");


const updateUI=(data)=>{

    //local variable
    // const city1=data.city1;
    // const weather=data.weather;

    // OR
    //  destructuring
    const{city1,weather}=data;

    details.innerHTML=`
    <h5 class="my-3">${city1.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    `;

    // update day and night image

    const imgSrc=`icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src",imgSrc);

    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc="day.png";
    }
    else{
        timeSrc="night.png";
    }
    time.setAttribute("src",timeSrc);
    // remove d-none.
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
    }
};


const updatecity=async(city)=>{

    const city1=await getcity(city);
    const weather = await getweather(city1.Key);
 //returning object

    return{city1,weather};

};



cityform.addEventListener("submit",(e)=>{
    //prevent default action
    e.preventDefault();

    //get city value
    const city=cityform.city.value.trim();
    cityform.reset();

    //update the ui with new city
    updatecity(city).then(data=>updateUI(data))
    .catch(error=>console.log(error));



});