import getToken from './module/unsplash.js';
import weatherApi from './module/openweather.js';
import geoApi from "./module/geolocation.js";

(async () =>{

  const results = await Promise.allSettled([geoApi(),getToken()]);
  const [{value:coords},{value:token}]=results;

  const {
    main:{temp},
    weather:[{main:info}]
  } = await weatherApi(coords);

  const unsplashToke = token.value;

  const weather = document.querySelector('#weather');
  const body = document.querySelector('body');
  const locationName = document.querySelector('#locationName');
  weather.textContent =`${info}@${temp}°C` ;
  body.style.backgroundImage = `url(${token.bg})`;
  locationName.textContent = unsplashToke.location;

})();
