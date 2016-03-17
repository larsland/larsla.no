function loadWeather(callback) {

    var weatherCondition = document.getElementById('condition');
    var temperature = document.getElementById('temperature');
    var name = document.getElementById('name');

    function httpGet(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    var data = JSON.parse(httpGet("http://api.openweathermap.org/data/2.5/weather?id=3133881&appid=b1b15e88fa797225412429c1c50c122a"))

    var mainWeatherDescription = data.weather[0].main;
    var subWeatherDescription = data.weather[0].description;
    var temperatureData = Number(parseInt(data.main.temp) - 273.15).toFixed(2)
    var nameData = data.name

    weatherCondition.innerHTML = (mainWeatherDescription + ' ' + '(' + subWeatherDescription + ')');
    temperature.innerHTML = temperatureData + '&degC';
    name.innerHTML = nameData;

    console.log(data)
}

window.addEventListener('load', loadWeather)
