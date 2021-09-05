const cityName = document.querySelector("#weather span:first-child");
const weahterName = document.querySelector("#weather span:last-child"); 

function success(pos) {
    const crd = pos.coords;
    const lat = crd.latitude;
    const lon = crd.longitude;

    const APIKEY = "8ffece332fcf3dc518ba4a18c1176e4b"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

    fetch(url).then(res => res.json()).then(data => {
        cityName.innerText = data.name;
        weahterName.innerText = data.weather[0].main;
    })
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};
  
navigator.geolocation.getCurrentPosition(success, error );