var timer;
var timer_active = false;
var workingNow = true;
var timeDislay = document.getElementById("timeDisplay");
var timeInput = document.getElementById("timeInput");
var restInput = document.getElementById("restInput");

function startStop() {
	if (timer_active === false) {
		timer_active = true;
		if (workingNow === true) {
			document.getElementById("workBreak").innerHTML = "You Work Now!";
			document.getElementById("timeBox").style.backgroundColor = 'red';
			countDown(timeInput.value * 60);
		} else {
			breakDown(restInput.value * 60);
		}
	} else {
		timer_active = false;
		clearTimeout(timer); // stops the countdown
	}
}

function countDown(seconds) {
	timer_active = true;
	workingNow = true;
	if (seconds >= 0) {
		displayTime(seconds--); // decrement and display
		timer = setTimeout(function(){ countDown(seconds) }, 10);
	} else {
		timer_active = false;
		clearTimeout(timer);
		document.getElementById("workBreak").innerHTML = "Smoke if you got 'em";
		document.getElementById("timeBox").style.backgroundColor = 'green';
		breakDown(restInput.value * 60);
	}
}
function breakDown(seconds) {
	timer_active = true;
	workingNow = false;
	if (seconds >= 0) {
		displayTime(seconds--); // decrement and display
		timer = setTimeout(function(){ breakDown(seconds) }, 10);
	} else {
		timer_active = false;
		clearTimeout(timer);
		document.getElementById("workBreak").innerHTML = "You Work Now!";
		document.getElementById("timeBox").style.backgroundColor = 'red';
		countDown(timeInput.value * 60);
	}
}

function displayTime(seconds) {
	var remainder = seconds % 60;
	if (remainder < 10) {
		timeDislay.innerHTML = Math.floor(seconds / 60) + ":0" + remainder;
	} else {
		timeDislay.innerHTML = Math.floor(seconds / 60) + ":" + remainder;
	}
}
