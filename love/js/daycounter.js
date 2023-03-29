var ngayyeu = "11/02/2022 13:30:00"; // MM/DD/YYYY h/m/s VD:"30/07/2023 13:30:00"
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
	if (ans < 0) {
		ans += 24;
	}
	if (ans - 10 < 0) {
		return "0" + ans;
	} else {
		return ans;
	}
};
const get_min = (d1, d2) => {
	let min1 = d1.getMinutes();
	let min2 = d2.getMinutes();
	ans = Math.ceil(min2 - min1);
	if (ans < 0) {
		ans += 60;
	}
	if (ans - 10 < 0) {
		return "0" + ans;
	} else {
		return ans;
	}
};
const get_sec = (d1, d2) => {
	let sec1 = d1.getSeconds();
	let sec2 = d2.getSeconds();
	ans = Math.ceil(sec2 - sec1);
	if (ans < 0) {
		ans += 60;
	}
	if (ans - 10 < 0) {
		return "0" + ans;
	} else {
		return ans;
	}
};
document.getElementById("circle").addEventListener("click", change);
document.getElementById("date").addEventListener("click", change);
function change() {
	let circle = document.getElementById("circle");
	let date = document.getElementById("date");

	checker = circle.classList.contains("hide");
	if (checker) {
		date.classList.add("hide");
		circle.classList.remove("hide");
	} else {
		circle.classList.add("hide");
		date.classList.remove("hide");
	}
}
function process() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let time = get_day_of_time(when, todate);
	time--;
	let ele = document.getElementById("process");
	let bg = document.getElementById("bg");

	let valueProcess = 0;
	count = 0;
	next = false;

	let process = setInterval(() => {
		valueProcess++;
		ele.style.background =
			"conic-gradient(transparent " + valueProcess * 3.6 + "deg, #fff 0deg)";
		if (valueProcess >= 100) {
			count++;
			time -= 100;
			if (count === 1) {
				bg.style.background = "#FFD6F3";
			}
			if (count === 2) {
				bg.style.background = "#FFA6E2";
			}
			if (count === 3) {
				bg.style.background = "#FF66CC";
			}
			if (count === 4) {
				bg.style.background = "#E01FB3";
			}
			if (count === 5) {
				bg.style.background = "#C118C7";
			}
			if (count >= 10) {
				next = true;
			}
			valueProcess = 0;
		}
		if (valueProcess === time) {
			clearInterval(process);
		}
		if (next && valueProcess >= time % 100) {
			clearInterval(process);
		}
	}, 5);
}
process();
function calander() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let day = Math.ceil((todate - when) / 1000 / 24 / 60 / 60) - 1;

	let yearele = document.getElementById("year");
	monthele = document.getElementById("month");
	weekele = document.getElementById("week");
	dayele = document.getElementById("day");

	let year = Math.floor(day / 365);
	day -= year * 365;
	let month = Math.floor(day / 30);
	day -= month * 30;
	let week = Math.floor(day / 7);
	day -= week * 7;

	year = `${year}<br>Năm</br>`;
	month = `${month}<br>Tháng</br>`;
	week = `${week}<br>Tuần</br>`;
	day = `${day}<br>Ngày</br>`;

	dayele.innerHTML = day;
	yearele.innerHTML = year;
	monthele.innerHTML = month;
	weekele.innerHTML = week;
}
calander();
dayruner();
function date() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let time = get_day_of_time(when, todate);
	time--;

	const daycount = document.getElementById("daycount");
	const start = document.getElementById("start");

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
	if (hour == 0 && min == 0 && sec == 0) {
		time++;
		calander();
		dayruner();
	}
	if (hour == 0 && min >= todate.getMinutes()) {
		hour = parseInt(hour);
		hour += 23;
	}
	const clock = document.getElementById("clock");
	clock.innerHTML = `<div class="clock">${hour}</div>:<div class="clock">${min}</div>:<div class="clock">${sec}</div>`;

	setTimeout(date, 1000);
}
date();

function dayruner() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let time = get_day_of_time(when, todate);
	time--;

	var day = 0;
	let days = setInterval(() => {
		day++;
		daycount.innerHTML = `${day} Ngày`;
		if (day == time) {
			clearInterval(days);
		}
	}, 5);
}
