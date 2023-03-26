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
function fb() {
	window.open("https://www.facebook.com/100090568388319");
}
function tt() {
	window.open("https://www.tiktok.com/@m_a_n_h_c_h_u");
}
function ig() {
	window.open("https://www.instagram.com/chumanhhh");
}
function gh() {
	window.open("https://github.com/manhchuduc");
}
function lovepage() {
	window.open("love");
}
function check() {
	var check = localStorage.getItem("darkmode");
	if (check) {
		let ele = document.body;
		ele.classList.add("dark");
	}
}
function darkmode() {
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
function avt() {
	var element = document.getElementById("avatar");
	element.classList.toggle("rotate");
}
