var timeOut, seconds, remainder;
var timer_active = false;
var timeDislay = document.getElementById("timeDisplay");
var clockToggle = document.getElementById("startStop");
var timeInput = document.getElementById("timeInput");

function startStop() {
	seconds = timeInput.value * 60;
	if (timer_active == false) {
		// clockToggle.innerHTML = "STOP";
		timer_active = true;
		countDown(seconds);
	} else {
		// clockToggle.innerHTML = "START";
		timer_active = false;
		clearTimeout(timeOut);
	}
}

function countDown(sec) {
	if (sec === 0) {
		timeDislay.innerHTML = "TIME IS UP!";
		startStop();
	} else {
		remainder = sec % 60;
		if (remainder < 10) {
			timeDislay.innerHTML = Math.floor(sec / 60) + ":0" + remainder;
		} else {
			timeDislay.innerHTML = Math.floor(sec / 60) + ":" + remainder;
		}
		sec--;
		timeOut = setTimeout(function(){ countDown(sec) }, 1000);
	}
}
