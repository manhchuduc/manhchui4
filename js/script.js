document.addEventListener("contextmenu", (e) => e.preventDefault());
document.onkeydown = function (e) {
	if (e.keyCode == 123) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == 85) {
		return false;
	}
};

// !Links
document
	.getElementById("fb")
	.addEventListener("click", () =>
		window.open("https://www.facebook.com/chuducmanh2904")
	);
document
	.getElementById("tt")
	.addEventListener("click", () =>
		window.open("https://www.tiktok.com/@m_a_n_h_c_h_u")
	);
document
	.getElementById("ig")
	.addEventListener("click", () =>
		window.open("https://www.instagram.com/_manhchu_")
	);
document
	.getElementById("gh")
	.addEventListener("click", () =>
		window.open("https://github.com/manhchuduc")
	);
// function lovepage() {
// 	window.open("love");
// }
// !Links
var allowTouch = true;

// document.getElementById("lovepage").addEventListener("click", lovepage);
function checkDarkMode() {
	const darkBut = document.querySelectorAll("#darkmodebut > svg");
	const check = localStorage.getItem("darkmode");
	const sun = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`;
	const moon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"/></svg>`;
	if (check === "true") {
		document.body.classList.add("dark");
		darkBut[0].outerHTML = moon;
		darkBut[1].outerHTML = sun;
	} else if (!check) {
		autoDarkmode();
	}
}
async function darkmode() {
	if (allowTouch) {
		const darkBut = document.querySelectorAll("#darkmodebut > svg");
		const check = localStorage.getItem("darkmode");
		const checkStyle = document.body.classList.contains("dark");

		const bDOuter1 = darkBut[0].outerHTML;
		const bDOuter2 = darkBut[1].outerHTML;
		if (check === "true" || checkStyle) {
			document.body.classList.remove("dark");
			localStorage.setItem("darkmode", false);
		} else {
			document.body.classList.add("dark");
			localStorage.setItem("darkmode", true);
		}
		darkBut[0].style.setProperty("transform", "translateY(6vh)");
		darkBut[1].style.setProperty("transform", "none", "important");
		allowTouch = false;
		await new Promise((resolve) => setTimeout(resolve, 300));
		darkBut[0].outerHTML = bDOuter2;
		darkBut[1].outerHTML = bDOuter1;
		await new Promise((resolve) => setTimeout(resolve, 10));
		allowTouch = true;
	}
}
function autoDarkmode() {
	const isDarkMode =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	let darkBut = document.querySelectorAll("#darkmodebut > svg");

	const sun = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`;
	const moon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"/></svg>`;
	if (isDarkMode) {
		document.body.classList.add("dark");
		darkBut[0].outerHTML = moon;
		darkBut[1].outerHTML = sun;
	} else {
		document.body.classList.remove("dark");
		darkBut[1].outerHTML = moon;
		darkBut[0].outerHTML = sun;
	}
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
function longPress() {
	const ele = document.querySelector("#darkmodebut");

	let pressTimer;
	const pressTime = 2000;

	const handleLongPress = async () => {
		if (allowTouch) {
			allowTouch = false;
			localStorage.removeItem("darkmode");
			const isDarkMode =
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches;
			const sun = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="transform: translateY(6vh);"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`;
			const moon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="transform: translateY(6vh);"><path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path></svg>`;

			let darkBut = document.querySelectorAll("#darkmodebut > svg");
			darkBut[1].outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64"><path d="M32 2C33.1046 2 34 2.89543 34 4V8C34 9.10457 33.1046 10 32 10C30.8954 10 30 9.10457 30 8V4C30 2.89543 30.8954 2 32 2Z" fill="currentColor"/><path fill="currentColor" fill-rule="evenodd" d="M32.0187 14C22.663 14 14.156 20.9407 14.0098 30.6614C13.9964 31.5566 13.9967 32.4482 14.0109 33.3441C14.165 43.0571 22.6615 50 32.0144 50C41.3213 50 49.812 43.121 49.9865 33.4428C50.0039 32.4775 50.0045 31.5181 49.9883 30.5547C49.8261 20.8707 41.3234 14 32.0187 14ZM24.4114 20.0648C26.6165 18.7536 29.2368 18 32.0187 18C39.5168 18 45.8456 23.4705 45.9882 30.5814C44.0168 31.4914 41.8204 32 39.5 32C32.1679 32 26.021 26.9071 24.4114 20.0648ZM21.0588 22.8528C19.1948 24.998 18.0546 27.7165 18.0094 30.7216C17.9965 31.5756 17.9969 32.4259 18.0104 33.2806C18.1242 40.4571 24.4757 46 32.0144 46C38.962 46 44.9057 41.2949 45.8566 34.9399C43.8624 35.6272 41.7232 36 39.5 36C30.9533 36 23.6941 30.5032 21.0588 22.8528Z" clip-rule="evenodd"/><path fill="currentColor" d="M34 56C34 54.8954 33.1046 54 32 54 30.8954 54 30 54.8954 30 56V60C30 61.1046 30.8954 62 32 62 33.1046 62 34 61.1046 34 60V56zM62 32C62 33.1046 61.1046 34 60 34H56C54.8954 34 54 33.1046 54 32 54 30.8954 54.8954 30 56 30H60C61.1046 30 62 30.8954 62 32zM8 34C9.10457 34 10 33.1046 10 32 10 30.8954 9.10457 30 8 30H4C2.89543 30 2 30.8954 2 32 2 33.1046 2.89543 34 4 34H8zM53.2132 10.7868C53.9942 11.5679 53.9942 12.8342 53.2132 13.6153L50.3848 16.4437C49.6037 17.2247 48.3374 17.2247 47.5563 16.4437 46.7753 15.6626 46.7753 14.3963 47.5563 13.6153L50.3848 10.7868C51.1658 10.0058 52.4321 10.0058 53.2132 10.7868zM16.4437 50.3848C17.2247 49.6037 17.2247 48.3374 16.4437 47.5564 15.6626 46.7753 14.3963 46.7753 13.6152 47.5564L10.7868 50.3848C10.0058 51.1658 10.0058 52.4322 10.7868 53.2132 11.5679 53.9943 12.8342 53.9943 13.6152 53.2132L16.4437 50.3848zM53.2128 53.2133C52.4317 53.9943 51.1654 53.9943 50.3844 53.2133L47.5559 50.3849C46.7749 49.6038 46.7749 48.3375 47.5559 47.5564 48.337 46.7754 49.6033 46.7754 50.3844 47.5564L53.2128 50.3849C53.9938 51.1659 53.9938 52.4322 53.2128 53.2133zM13.6148 16.4438C14.3959 17.2248 15.6622 17.2248 16.4433 16.4438 17.2243 15.6627 17.2243 14.3964 16.4433 13.6153L13.6148 10.7869C12.8338 10.0059 11.5675 10.0059 10.7864 10.7869 10.0054 11.5679 10.0054 12.8343 10.7864 13.6153L13.6148 16.4438z"/></svg>`;
			darkBut = document.querySelectorAll("#darkmodebut > svg");
			await new Promise((resolve) => setTimeout(resolve, 40));
			darkBut[0].style.setProperty("transform", "translateY(6vh)");
			darkBut[1].style.setProperty("transform", "none", "important");
			await new Promise((resolve) => setTimeout(resolve, 400));
			if (isDarkMode) darkBut[0].outerHTML = moon;
			else darkBut[0].outerHTML = sun;
			darkBut = document.querySelectorAll("#darkmodebut > svg");
			await new Promise((resolve) => setTimeout(resolve, 1100));
			darkBut[0].style.removeProperty("transform");
			darkBut[1].style.removeProperty("transform");
			await new Promise((resolve) => setTimeout(resolve, 300));
			if (isDarkMode) {
				document.body.classList.add("dark");
				darkBut[1].outerHTML = sun.replace(
					'style="transform: translateY(6vh);"',
					""
				);
			} else {
				document.body.classList.remove("dark");
				darkBut[1].outerHTML = moon.replace(
					'style="transform: translateY(6vh);"',
					""
				);
			}
			await new Promise((resolve) => setTimeout(resolve, 10));
			allowTouch = true;
		}
	};
	ele.addEventListener("mousedown", () => {
		pressTimer = setTimeout(handleLongPress, pressTime);
	});
	ele.addEventListener("mouseup", () => {
		clearTimeout(pressTimer);
	});

	ele.addEventListener("mouseleave", () => {
		clearTimeout(pressTimer);
	});
	ele.addEventListener("touchstart", () => {
		pressTimer = setTimeout(handleLongPress, pressTime);
	});
	ele.addEventListener("touchend", () => {
		clearTimeout(pressTimer);
	});
	ele.addEventListener("touchcancel", () => {
		clearTimeout(pressTimer);
	});
}
document.addEventListener("DOMContentLoaded", () => {
	checkDarkMode();
	document.querySelector("#darkmodebut").addEventListener("click", darkmode);
	document.getElementById("avatar").addEventListener("click", avt);
	hoverEffect();
	longPress();
	if (window.matchMedia)
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", autoDarkmode);
});
