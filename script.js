var c = 0;
var t;
var timer_active = false;

function timedCount() {
	document.getElementById("seconds").innerHTML = c++;
	t = setTimeout(function(){ timedCount() }, 1000);
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
