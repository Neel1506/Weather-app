const API_Key = '473528a3fdd14a5adac2336388cef14d';
const search = document.querySelector(".search");
const form = document.querySelector("form");
const Weather = document.querySelector("#Weather");
 
 const getweather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`

    const response = await fetch(url);
    const data = await response.json()
    // console.log(data);
    return showWeather(data);
 }

 const showWeather  = (data) =>{
    Weather.innerHTML = ` 
                                <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <h2>${data.main.temp}℃</h2>
            <h4>${data.weather[0].main}</h4>
`
 } 

 form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault();
    }
 )
