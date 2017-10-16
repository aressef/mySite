var city = document.getElementById('city');
var temp = document.getElementById('temp');
var weather = document.getElementById('weather');

// Get location
var functions = {
  getLocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  },
  showPosition: function(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var pathWithCurrentLocal = 'https://fcc-weather-api.glitch.me/api/current?lat=' + latitude + '&lon=' + longitude + '&APPID=31405be1fb8f6e7f0bb74137ccb08125';

    ajaxRequest(pathWithCurrentLocal, function(data){
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var getTemp = data.main.temp;
      var getCity = data.name;
      var sunrise = data.sys.sunrise;
      var sunset = data.sys.sunset;
      getWeather = data.weather[0].description;
      var getWeatherUpperCase = functions.toTitleCase(getWeather);

      // Converting Weather from Kelvin to Fahrenheit and Celsius
      var fahrenheitConverter = Math.round(getTemp * (9/5) + 32);
      var celsiusConverter = Math.round(getTemp);
      fahrenheit = fahrenheitConverter;
      celsius = celsiusConverter;

      city.innerHTML = getCity;
      temp.innerHTML = fahrenheit + " &#8457;";
      weather.innerHTML = getWeatherUpperCase;

      console.log(data);


      console.log(getWeatherUpperCase);

      functions.getWeatherIcon();
    });
  },
  toggleTemp: function() {
    var currentTempType = document.getElementById('temp');
    var fahrenheitSymbol = document.createElement("TEXTAREA");
    fahrenheitSymbol.innerHTML = " &#8457;";

    if (currentTempType.innerHTML == fahrenheit + fahrenheitSymbol.value) {
      currentTempType.innerHTML = celsius + " &#8451;";
    } else {
      currentTempType.innerHTML = fahrenheit + fahrenheitSymbol.value;
    }

    console.log(currentTempType.innerHTML);
  },
  getWeatherIcon: function() {
    var weatherIcon = document.getElementById('weatherIcon');
    var currentWeather = weather.innerHTML;
    var image = '';

    switch(currentWeather) {
      case "Sunny":
      case "Clear Sky":
      case "Clear":
        image = '../img/weatherIcons/weather-clear.png';
        break;
      case "Broken Clouds":
        image = '../img/weatherIcons/weather-haze.png';
        break;
      case "Cloudy":
      case "Overcast Clouds":
        image = '../img/weatherIcons/weather-clouds.png';
        break;
      case "Few Clouds":
      case "Scattered Clouds":
        image = '../img/weatherIcons/weather-few-clouds.png';
        break;
      case "Rainy":
        image = '../img/weatherIcons/weather-showers-night.png';
        break;
      case "Light Rain":
      case "Mist":
        image = '../img/weatherIcons/weather-rain-night.png';
        break;
      case "Snow":
        image = '../img/weatherIcons/weather-snow.png';
        break;
      case "Stormy":
      case "Thunderstroms":
        image = '../img/weatherIcons/weather-storm.png'
        break;
      default:
        image = '../img/weatherIcons/weather-none-available.png';
        console.log("I can't seem to find the weather.");
    }
    weatherIcon.src = image;
  },
  getTime: function() {
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    console.log(hour + ' ' + minutes);
  },
  toTitleCase: function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
};


// AJAX request
function ajaxRequest (path, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        if (callback) callback(data);
      } else {
        console.log('Error: ' + xhr.status);
      }
    }

  };

  xhr.open('GET', path);
  xhr.send(null);
}

functions.getLocation();
