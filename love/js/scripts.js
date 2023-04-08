document.addEventListener("contextmenu", (event) => event.preventDefault());
document.onkeydown = function (e) {
	if (e.keyCode == 123) {
		return false;
	}

	// disable I key
	if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		return false;
	}

	// disable J key
	if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
		return false;
	}

	// disable U key
	if (e.ctrlKey && e.keyCode == 85) {
		return false;
	}
};

document.querySelector(".dot1").addEventListener("click", left);
document.querySelector(".dot2").addEventListener("click", right);
document.querySelector("#counter").addEventListener("click", change);
document.querySelector("#calender").addEventListener("click", change);
function change() {
	if (document.querySelector("#counter").classList.contains("hide")) {
		left();
	} else {
		right();
	}
}
function left() {
	let counter = document.querySelector("#counter");
	let calender = document.querySelector("#calender");
	let dot1 = document.querySelector(".dot1");
	let dot2 = document.querySelector(".dot2");

	dot1.classList.add("active");
	dot2.classList.remove("active");
	counter.classList.remove("hide");
	calender.classList.add("hide");
}
function right() {
	let counter = document.querySelector("#counter");
	let calender = document.querySelector("#calender");
	let dot1 = document.querySelector(".dot1");
	let dot2 = document.querySelector(".dot2");

	dot1.classList.remove("active");
	dot2.classList.add("active");
	counter.classList.add("hide");
	calender.classList.remove("hide");
}
