function loadWeather() {

    var weatherCondition = document.getElementById('condition');
    var temperature = document.getElementById('temperature');
    var name = document.getElementById('name');

    var httpGet = function(url, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, true);
        xmlHttp.onload = function(e) {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    callback(JSON.parse(xmlHttp.responseText))
                } else {
                    console.error(xmlHttp.statusText);
                }
            }
        }
        xmlHttp.onerror = function(e) {
            console.error(xmlHttp.statusText)
        }
        xmlHttp.send(null);
    }

    var renderWeather = function(data) {
        var mainWeatherDescription = data.weather[0].main;
        var subWeatherDescription = data.weather[0].description;
        var temperatureData = Number(parseInt(data.main.temp) - 273).toFixed(2)
        var nameData = data.name

        weatherCondition.innerHTML = (mainWeatherDescription + ' ' + '(' + subWeatherDescription + ')');
        temperature.innerHTML = temperatureData + '&degC';
        name.innerHTML = nameData;
    }

    httpGet('http://api.openweathermap.org/data/2.5/weather?id=3133881&appid=b1b15e88fa797225412429c1c50c122a', renderWeather);
}

window.addEventListener('load', loadWeather)
