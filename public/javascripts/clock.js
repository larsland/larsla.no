function setTime() {
	var paragraph = document.getElementById('time')
	var time = new Date()
	var hour = time.getHours()
	var min = time.getMinutes()
	var sec = time.getSeconds()

	function formatTime(hour, min, sec) {
		if (sec < 10) {
			sec = "0" + sec
		}
		if (min < 10) {
			min = "0" + sec
		}
		if (hour < 10) {
			hour = "0" + sec
		}
		return hour + ':' + min + ':' + sec
	}

	var string = formatTime(hour, min, sec) 
	paragraph.innerHTML = string
}



function setDate() {
	var insertDate = document.getElementById('date')
	var insertWeekday = document.getElementById('weekday')
	var insertWeek = document.getElementById('week')
	var time = new Date()
	var day = time.getDay()
	var dayOfMonth = time.getUTCDate() 
	var weekday = checkWeekday(day)
	var month = time.getUTCMonth() + 1
	var year = time.getUTCFullYear() 
	var weekOfYear = time.getWeek() 

	var string = dayOfMonth + '/' + month + '/' + year 

	insertDate.innerHTML = string
	insertWeekday.innerHTML = weekday
	insertWeek.innerHTML = "Week " + weekOfYear
}

function checkWeekday(day) {
	var weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	return weekday[day]
}

Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay())/7);
} 

window.addEventListener('load', function(e) {
	setTime()
	setDate()
	setInterval(function(){ setTime() }, 1000)
}) 

