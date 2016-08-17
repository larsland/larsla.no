var time = document.getElementsByName("commentTimePosted");

var formatTime = function() {
    for (var i = 0; i < time.length; i++) {
        postedDate = new Date(time[i].innerHTML);
        timeInMillis = Date.now() - postedDate;
        timeInSeconds = timeInMillis / 1000;
        timeInMinutes = timeInSeconds / 60;
        timeInHours = timeInMinutes / 60;

        if (Math.floor(timeInHours) === 0) {
            if (Math.floor(timeInMinutes) === 0) {
                time[i].innerHTML = Math.floor(timeInSeconds) + " seconds ago";
            }
            else {
                time[i].innerHTML = Math.floor(timeInMinutes) + " minutes ago";
            }
        }
        else if (Math.floor(timeInHours >= 24)) {
            time[i].innerHTML = Math.floor(timeInHours / 24) + " days ago"
        }
        else {
            time[i].innerHTML = Math.floor(timeInHours) + " hours ago";
        }
    }

}

window.addEventListener("load", formatTime);
