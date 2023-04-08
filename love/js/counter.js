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