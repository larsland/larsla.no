var app = angular.module("larsla", []);

app.controller("HomeController", ["$scope", "$interval", "$http", function($scope, $interval, $http) {

    var cityCounter = 0;

    $scope.loadArticles = function() {
        $http.get("/api/articles").then(function(res){
            $scope.articles = res.data;
        });
    }

    $scope.initiateBlueBar = function() {
        setTime();
        setDate();
        $interval(setTime, 1000)
        loadWeather("Trondheim")
    }

    $scope.goToArticle = function(id) {
        window.location = "/news/" + id;
    }

    var setTime = function() {
    	var time = new Date()
    	var hour = time.getHours()
    	var min = time.getMinutes()
    	var sec = time.getSeconds()

    	function formatTime(hour, min, sec) {
    		if (sec < 10) {
    			sec = "0" + sec
    		}
    		if (min < 10) {
    			min = "0" + min
    		}
    		if (hour < 10) {
    			hour = "0" + hour
    		}
    		return hour + ':' + min + ':' + sec
    	}
    	$scope.time = formatTime(hour, min, sec)
    }

    var setDate = function() {
    	var time = new Date()
        $scope.weekday = checkWeekday(time.getDay());
        $scope.week = "Week " + time.getWeek();
        $scope.date = time.getUTCDate() + '/' + time.getUTCMonth() + '/' + time.getUTCFullYear();
    }

    var checkWeekday = function(day) {
    	var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    	return weekday[day]
    }

    Date.prototype.getWeek = function() {
    	var onejan = new Date(this.getFullYear(),0,1);
    	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay())/7);
    }

    var loadWeather = function(city) {
        var weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=be55e41ee85013c7d884355794cb9f6d";

        $http.get(weatherApiUrl).then(function(res) {
            renderWeather(res.data);
        })

        var renderWeather = function(data) {
            $scope.cityName = data.name;
            $scope.weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            $scope.temperature = Number(parseInt(data.main.temp) - 273).toFixed(2);
            $scope.weatherCondition = data.weather[0].main + ' ' + '(' + data.weather[0].description + ')';
        }
    }

    $scope.changeWeather = function() {
        var cities = ["Trondheim", "Oslo", "Sandefjord"];
        if ((cityCounter + 1) >= cities.length) {
            cityCounter = 0;
        }
        else {
            cityCounter += 1;
        }
        loadWeather(cities[cityCounter])
    }

}]);
