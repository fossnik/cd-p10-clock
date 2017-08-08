var t, seconds;
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
		clearTimeout(t);
	}
}

function countDown() {
	if (seconds === 0) {
		timeDislay.innerHTML = "TIME IS UP!";
		startStop();
	} else {
		var minutes = Math.floor(seconds / 60);
		var remainder = seconds - minutes * 60;
		if (remainder < 10) {
			timeDislay.innerHTML = minutes + ":0" + remainder;
		} else {
			timeDislay.innerHTML = minutes + ":" + remainder;
		}
		seconds--;
		t = setTimeout(function(){ countDown() }, 1000);
	}
}
