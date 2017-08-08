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
		countDown();
	} else {
		// clockToggle.innerHTML = "START";
		timer_active = false;
		clearTimeout(timeOut);
	}
}

function countDown() {
	if (seconds === 0) {
		timeDislay.innerHTML = "TIME IS UP!";
		startStop();
	} else {
		remainder = seconds % 60;
		if (remainder < 10) {
			timeDislay.innerHTML = Math.floor(seconds / 60) + ":0" + remainder;
		} else {
			timeDislay.innerHTML = Math.floor(seconds / 60) + ":" + remainder;
		}
		seconds--;
		timeOut = setTimeout(function(){ countDown() }, 1000);
	}
}
