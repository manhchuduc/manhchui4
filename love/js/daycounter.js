var ngayyeu = "11/02/2022 13:30:00";
// document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.onkeydown = function (e) {
// 	if (e.keyCode == 123) {
// 		return false;
// 	}

// 	// disable I key
// 	if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
// 		return false;
// 	}

// 	// disable J key
// 	if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
// 		return false;
// 	}

// 	// disable U key
// 	if (e.ctrlKey && e.keyCode == 85) {
// 		return false;
// 	}
// };
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
function calander() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let time = get_day_of_time(when, todate);
	time--;

	let yearele = document.getElementById("year");
	monthele = document.getElementById("month");
	weekele = document.getElementById("week");
	dayele = document.getElementById("day");

	let year = time / 365;
	year = parseInt(year);
	let month = time / 30;
	month = parseInt(month);
	let day = time % 30;
	let week = day / 7;
	week = parseInt(week);
	day = day - week * 7;

	year = year + "<br>Năm</br>";
	month = month + "<br>Tháng</br>";
	week = week + "<br>Tuần</br>";
	day = day + "<br>Ngày</br>";

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

	start.innerHTML = whenday + "-" + whenmonth + "-" + whenyear;

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
	clock.innerHTML =
		'<div class="clock">' +
		hour +
		'</div>:<div class="clock">' +
		min +
		'</div>:<div class="clock">' +
		sec +
		"</div>";

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
		daycount.innerHTML = day + " Ngày";
		if (day == time) {
			clearInterval(days);
		}
	}, 1);
}
