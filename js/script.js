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

// !Links
document.getElementById("fb").addEventListener("click", fb);
document.getElementById("tt").addEventListener("click", tt);
document.getElementById("ig").addEventListener("click", ig);
document.getElementById("gh").addEventListener("click", gh);
function fb() {
	window.open("https://www.facebook.com/chuducmanh2904");
}
function tt() {
	window.open("https://www.tiktok.com/@m_a_n_h_c_h_u");
}
function ig() {
	window.open("https://www.instagram.com/_manhchu_");
}
function gh() {
	window.open("https://github.com/manhchuduc");
}
function lovepage() {
	window.open("love");
}
// !Links

const darkModeBut = document.getElementById("darkmodebut");
// document.getElementById("lovepage").addEventListener("click", lovepage);
function check() {
	const darkBut = document.querySelectorAll("#darkmodebut > i.fa-solid");
	const check = localStorage.getItem("darkmode");
	const sun = '<i class="fa-solid fa-sun"></i>';
	const moon = '<i class="fa-solid fa-moon"></i>';
	if (check) {
		document.body.classList.add("dark");
		darkBut[0].outerHTML = moon;
		darkBut[1].outerHTML = sun;
	}
}
function darkmode() {
	const darkBut = document.querySelectorAll("#darkmodebut > i.fa-solid");
	const check = localStorage.getItem("darkmode");

	const bDOuter1 = darkBut[0].outerHTML;
	const bDOuter2 = darkBut[1].outerHTML;
	if (check) {
		document.body.classList.remove("dark");
		localStorage.removeItem("darkmode");
	} else {
		document.body.classList.add("dark");
		localStorage.setItem("darkmode", true);
	}
	darkBut[0].style.setProperty("transform", "translateY(6vh)");
	darkBut[1].style.setProperty("transform", "none", "important");
	darkModeBut.removeEventListener("click", darkmode);
	setTimeout(() => {
		darkBut[0].outerHTML = bDOuter2;
		darkBut[1].outerHTML = bDOuter1;
		darkModeBut.addEventListener("click", darkmode);
	}, 300);
}
function avt() {
	var element = document.getElementById("avatar");
	element.classList.toggle("rotate");
}
document.addEventListener("DOMContentLoaded", () => {
	check();
	darkModeBut.addEventListener("click", darkmode);
	document.getElementById("avatar").addEventListener("click", avt);
});
