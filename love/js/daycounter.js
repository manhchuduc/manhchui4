var ngayyeu = "03/28/2023 00:00:00"; // MM/DD/YYYY h/m/s VD:"30/07/2023 13:30:00"
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
const get_day_of_time = (d1, d2) => {
	let ms1 = d1.getTime();
	let ms2 = d2.getTime();
	return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
};
const get_hour = (d1, d2) => {
	let h1 = d1.getHours();
	let h2 = d2.getHours();
	ans = Math.ceil(h2 - h1);
	return ans;
};
const get_min = (d1, d2) => {
	let min1 = d1.getMinutes();
	let min2 = d2.getMinutes();
	ans = Math.ceil(min2 - min1);
	return ans;
};
const get_sec = (d1, d2) => {
	let sec1 = d1.getSeconds();
	let sec2 = d2.getSeconds();
	ans = Math.ceil(sec2 - sec1);
	return ans;
};

document.querySelector(".dot1").addEventListener("click", scrollLeft);
document.querySelector(".dot2").addEventListener("click", scrollRight);
function scrollLeft() {
	let scroll = document.querySelector(".scroll");
	var scrollAmount = 0;
	scroll.scrollTo({
		top: 0,
		left: Math.min((scrollAmount -= 500), 0),
		behavior: "smooth",
	});
}
function scrollRight() {
	let scroll = document.querySelector(".scroll");
	var scrollAmount = 0;
	scroll.scrollTo({
		top: 0,
		left: Math.max((scrollAmount += 500), 2000),
		behavior: "smooth",
	});
}
document.querySelector(".scroll").addEventListener("scroll", dot);
function dot() {
	let dot1 = document.querySelector(".dot1");
	let dot2 = document.querySelector(".dot2");
	let scroll = document.querySelector(".scroll");

	if (scroll.scrollLeft == 0) {
		dot1.classList.add("active");
		dot2.classList.remove("active");
	} else {
		dot1.classList.remove("active");
		dot2.classList.add("active");
	}
}

document.querySelector(".s1").addEventListener("dblclick", change);
document.querySelector(".s2").addEventListener("dblclick", change);
function change() {
	let scroll = document.querySelector(".scroll");

	if (scroll.scrollLeft != 0) {
		scrollLeft();
	} else {
		scrollRight();
	}
}
function process() {
	let ele = document.querySelector(".process");
	let when = new Date(ngayyeu);
	let todate = new Date();
	let time = get_day_of_time(when, todate);
	time--;

	let valueProcess = 0;
	let count = 0;
	let next = false;
	let speed = 3 / time;
	let color = "#dd9bfa";

	let process = setInterval(() => {
		valueProcess++;
		ele.style.background = `conic-gradient(${color} ${
			valueProcess * 3.6
		}deg, #fff 0deg)`;
		if (valueProcess >= 100) {
			count++;
			time -= 100;
			if (count === 1) {
				color = "#FFD6F3";
			} else if (count === 2) {
				color = "#FFA6E2";
			} else if (count === 3) {
				color = "#FF66CC";
			} else if (count === 4) {
				color = "#E01FB3";
			} else if (count === 5) {
				color = "#C118C7";
			} else if (count >= 10) {
				next = true;
			}
			valueProcess = 0;
		}
		if (valueProcess === time || (next && valueProcess >= time % 100)) {
			clearInterval(process);
		}
	}, speed);
}
process();
function dayruner() {
	const daycount = document.querySelector("counter");
	let when = new Date(ngayyeu);
	let todate = new Date();
	let time = get_day_of_time(when, todate);
	time--;
	speed = 3 / time;

	let day = 0;
	let days = setInterval(() => {
		day++;
		daycount.innerHTML = `${day} Ngày`;
		if (day === time) {
			clearInterval(days);
		}
	}, speed);
}
dayruner();
function calander() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let day = Math.ceil((todate - when) / 1000 / 24 / 60 / 60) - 1;

	const yearele = document.getElementById("year");
	const monthele = document.getElementById("month");
	const weekele = document.getElementById("week");
	const dayele = document.getElementById("day");

	let year = Math.floor(day / 365);
	day -= year * 365;
	let month = Math.floor(day / 30);
	day -= month * 30;
	let week = Math.floor(day / 7);
	day -= week * 7;

	dayele.innerHTML = day;
	yearele.innerHTML = year;
	monthele.innerHTML = month;
	weekele.innerHTML = week;
}
calander();
function date() {
	let when = new Date(ngayyeu);
	let todate = new Date();

	const start = document.querySelector(".start");

	let whenyear = when.getFullYear();
	let whenmonth = when.getMonth() + 1;
	let whenday = when.getDate();
	if (whenday - 10 < 0) {
		whenday = "0" + whenday;
	}
	if (whenmonth - 10 < 0) {
		whenmonth = "0" + whenmonth;
	}

	start.innerHTML = `${whenday}/${whenmonth}/${whenyear}`;

	let hour = get_hour(when, todate);
	let min = get_min(when, todate);
	let sec = get_sec(when, todate);
	if (sec < 0) {
		min--;
		sec += 60;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}
	if (min < 0) {
		hour--;
		min += 60;
	}
	if (min < 10) {
		min = "0" + min;
	}
	if (hour < 0) {
		hour += 24;
	}
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (hour == 0 && min == 0 && sec == 0) {
		time++;
		calander();
		dayruner();
	}
	const clock = document.querySelector(".time");
	clock.innerHTML = `<div class="clock">${hour}</div>:<div class="clock">${min}</div>:<div class="clock">${sec}</div>`;

	setTimeout(date, 1000);
}
date();
