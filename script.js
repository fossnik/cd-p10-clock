var c = 10;
var t;
var timer_active = false;

function timedCount() {
	if (c !== 0) {
		document.getElementById("seconds").innerHTML = c--;
		t = setTimeout(function(){ timedCount() }, 1000);
	} else {
		document.getElementById("seconds").innerHTML = "TIME IS UP!";
	}
}

function startCount() {
	if (!timer_active) {
		timer_active = true;
		timedCount();
		document.getElementById("toggle").innerHTML = "STOP";
	} else {
		clearTimeout(t);
		timer_active = false;
		document.getElementById("toggle").innerHTML = "START";
	}
}
