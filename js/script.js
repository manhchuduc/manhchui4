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
function check() {
	let ele = document.getElementById("body");
	var check = localStorage.getItem("darkmode");
	if (check) {
		let ele = document.getElementById("body");
		ele.classList.add("dark");
	}
}
function myFunction() {
	var element = document.body;
	var check = localStorage.getItem("darkmode");
	if (check) {
		element.classList.remove("dark");
		localStorage.removeItem("darkmode");
	} else {
		element.classList.add("dark");
		localStorage.setItem("darkmode", "True");
	}
}
function rotate() {
	var element = document.body;
	element.classList.toggle("rotate");
}
