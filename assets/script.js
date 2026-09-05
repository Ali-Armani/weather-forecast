const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
      var data = await response.json();

      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
      document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
      document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';

      if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = 'assets/images/clouds.png';
      } else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = 'assets/images/clear.png';
      } else if (data.weather[0].main === 'Snow') {
        weatherIcon.src = 'assets/images/snow.png';
      } else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = 'assets/images/rain.png';
      } else if (data.weather[0].main === 'Mist') {
        weatherIcon.src = 'assets/images/mist.png';
      } else {
        weatherIcon.src = 'assets/images/drizzle.png';
      }

      document.querySelector('.weather').style.display = 'block';
      document.querySelector('.error').style.display = 'none';
    }

}

searchBtn.addEventListener('click', ()=>{
  checkWeather(searchBox.value);
})
