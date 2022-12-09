 const API_KEY = "0e7b73f1c7a7ad297d4973aa24fa81c6"
 
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("You live it "+lat+" "+lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json())
                .then(data => { 
                                    const weather = document.querySelector("#weather span:first-child");
                                    const city = document.querySelector("#weather span:last-child");
                                    city.innerText = String(data.name);
                                    weather.innerText = data.weather[0].main;
                                    console.log(data);
                              });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);