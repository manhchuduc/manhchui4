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
function hoverEffect(elementsId = ["fb", "tt", "ig", "gh"]) {
	document.addEventListener("touchmove", (e) => {
		let elePos = {};
		elementsId.forEach((id) => {
			let top = document.getElementById(id).getBoundingClientRect().top;
			let right = document.getElementById(id).getBoundingClientRect().right;
			let bottom = document.getElementById(id).getBoundingClientRect().bottom;
			let left = document.getElementById(id).getBoundingClientRect().left;
			elePos[id] = { top: top, right: right, bottom: bottom, left: left };
		});

		elementsId.forEach((id) => {
			let ele = document.getElementById(id);
			let clX = e.touches[0].clientX;
			let clY = e.touches[0].clientY;
			let rect = elePos[id];
			if (ele.classList.contains("touch")) {
				if (
					clX < rect.left ||
					clX > rect.right ||
					clY < rect.top ||
					clY > rect.bottom
				) {
					ele.classList.remove("touch");
				}
			} else {
				if (
					clX >= rect.left &&
					clX <= rect.right &&
					clY >= rect.top &&
					clY <= rect.bottom
				) {
					ele.classList.add("touch");
				}
			}
		});
	});
	document.addEventListener("touchstart", (e) => {
		let elePos = {};
		elementsId.forEach((id) => {
			document.getElementById(id).classList.add("no-hover");
			let top = document.getElementById(id).getBoundingClientRect().top;
			let right = document.getElementById(id).getBoundingClientRect().right;
			let bottom = document.getElementById(id).getBoundingClientRect().bottom;
			let left = document.getElementById(id).getBoundingClientRect().left;
			elePos[id] = { top: top, right: right, bottom: bottom, left: left };
		});

		elementsId.forEach((id) => {
			let ele = document.getElementById(id);
			let clX = e.touches[0].clientX;
			let clY = e.touches[0].clientY;
			let rect = elePos[id];
			if (!ele.classList.contains("touch")) {
				if (
					clX >= rect.left &&
					clX <= rect.right &&
					clY >= rect.top &&
					clY <= rect.bottom
				) {
					ele.classList.add("touch");
				}
			}
		});
	});
	document.addEventListener("touchend", () => {
		elementsId.forEach((id) =>
			document.getElementById(id).classList.remove("touch")
		);
	});
}
document.addEventListener("DOMContentLoaded", () => {
	check();
	darkModeBut.addEventListener("click", darkmode);
	document.getElementById("avatar").addEventListener("click", avt);
	hoverEffect();
});
