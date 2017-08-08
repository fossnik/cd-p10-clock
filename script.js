var timer, remainder;
var timer_active = false;
var timeDislay = document.getElementById("timeDisplay");
var clockToggle = document.getElementById("startStop");
var timeInput = document.getElementById("timeInput");

function startStop() {
	if (timer_active === false) {
		timer_active = true;
		countDown(timeInput.value * 60);
	} else {
		timer_active = false;
		clearTimeout(timer); // stops the countdown
	}
}

function countDown(seconds) {
	if (seconds > 0) {
		displayTime(seconds--); // decrement and display
		timer = setTimeout(function(){ countDown(seconds) }, 10);
	} else {
		timeDislay.innerHTML = "TIME IS UP!";
		timer_active = false;
		clearTimeout(timer);
	}
}

function displayTime(seconds) {
	remainder = seconds % 60;
	if (remainder < 10) {
		timeDislay.innerHTML = Math.floor(seconds / 60) + ":0" + remainder;
	} else {
		timeDislay.innerHTML = Math.floor(seconds / 60) + ":" + remainder;
	}
}
