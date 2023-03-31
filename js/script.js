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
document.getElementById("fb").addEventListener("click", fb);
document.getElementById("tt").addEventListener("click", tt);
document.getElementById("ig").addEventListener("click", ig);
document.getElementById("gh").addEventListener("click", gh);
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
document.getElementById("darkmodebut").addEventListener("click", darkmode);
document.getElementById("lovepage").addEventListener("click", lovepage);
document.getElementById("avatar").addEventListener("click", avt);
function check() {
	let element = document.body;
	let dark = document.getElementById("darkmodebut");
	var check = localStorage.getItem("darkmode");
	if (check) {
		element.classList.add("dark");
		dark.innerHTML = '<i class="fa-solid fa-moon"></i>';
	}
}
check();
function darkmode() {
	let element = document.body;
	let dark = document.getElementById("darkmodebut");
	var check = localStorage.getItem("darkmode");
	if (check) {
		element.classList.remove("dark");
		dark.innerHTML = '<i class="fa-solid fa-sun"></i>';
		localStorage.removeItem("darkmode");
	} else {
		element.classList.add("dark");
		dark.innerHTML = '<i class="fa-solid fa-moon"></i>';
		localStorage.setItem("darkmode", "True");
	}
}
function avt() {
	var element = document.getElementById("avatar");
	element.classList.toggle("rotate");
}
