const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "f01830d12e78658897babaf7cddaf428";

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat,lon){
    const url = `${UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = ( clima.main.temp - 273.15).toFixed(2)
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = temperature +'°C';
    pinFondo(temperature);
}

async function getClimaByCity(city){
const url = `${UrlBase}q=${city}&appid=${ApiKey}`;
console.log(url);
const clima = await fetchApi(url);
console.log(clima);
const temperature = (clima.main.temp - 273.15).toFixed(2)
document.querySelector('#left h2').innerHTML = clima.name;
document.querySelector('#left h3').innerHTML = temperature +'°C';
pinFondo(temperature);
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
       getClima(lat,lon);
    }
);

function pinFondo(temperature){
    const body = document.querySelector('body');
    if(temperature < 10){
        body.style.background = '#00FFFF';
    } else if (temperature < 20){
       body.style.background = '#fbff0';
    } else {
       body.style.background = '#FF5555';
    }
}
  
btnBuscar.addEventListener('click',()=>{
    const city = inputCity.value;
    if(city){
        getClimaByCity(city);
    }
})

