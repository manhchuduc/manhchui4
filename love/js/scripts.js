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

document.querySelector(".dot1").addEventListener("click", left);
document.querySelector(".dot2").addEventListener("click", right);
document.querySelector("#counter").addEventListener("click", change);
document.querySelector("#calender").addEventListener("click", change);

// !Change
function change() {
	if (document.querySelector("#counter").classList.contains("hide")) {
		left();
	} else {
		right();
	}
}
function left() {
	let counter = document.querySelector("#counter");
	let calender = document.querySelector("#calender");
	let dot1 = document.querySelector(".dot1");
	let dot2 = document.querySelector(".dot2");

	dot1.classList.add("active");
	dot2.classList.remove("active");
	counter.classList.remove("hide");
	calender.classList.add("hide");
}
function right() {
	let counter = document.querySelector("#counter");
	let calender = document.querySelector("#calender");
	let dot1 = document.querySelector(".dot1");
	let dot2 = document.querySelector(".dot2");

	dot1.classList.remove("active");
	dot2.classList.add("active");
	counter.classList.add("hide");
	calender.classList.remove("hide");
}
// !Change

// !Cung
function checkcung(ns) {
	let ngaysinh = new Date(ns);

	let day = ngaysinh.getDate();
	let month = ngaysinh.getMonth() + 1;

	if ((21 <= day && month === 3) || (20 >= day && month === 4)) {
		return "&nbsp♈︎Bạch Dương&nbsp";
	} else if ((21 <= day && month === 4) || (20 >= day && month === 5)) {
		return "&nbsp♉︎Kim Ngưu&nbsp";
	} else if ((21 <= day && month === 5) || (21 >= day && month === 6)) {
		return "&nbsp♊︎Song Tử&nbsp";
	} else if ((22 <= day && month === 6) || (22 >= day && month === 7)) {
		return "&nbsp♋︎Cự Giải&nbsp";
	} else if ((23 <= day && month === 7) || (22 >= day && month === 8)) {
		return "&nbsp♌︎Sư Tử&nbsp";
	} else if ((23 <= day && month === 8) || (22 >= day && month === 9)) {
		return "&nbsp♍︎Xử Nữ&nbsp";
	} else if ((23 <= day && month === 9) || (22 >= day && month === 10)) {
		return "&nbsp♎︎Thiên Bình&nbsp";
	} else if ((23 <= day && month === 10) || (21 >= day && month === 11)) {
		return "&nbsp♏︎Bọ Cạp&nbsp";
	} else if ((22 <= day && month === 11) || (21 >= day && month === 12)) {
		return "&nbsp♐︎Nhân Mã&nbsp";
	} else if ((22 <= day && month === 12) || (19 >= day && month === 1)) {
		return "&nbsp♑︎Ma Kết&nbsp";
	} else if ((20 <= day && month === 1) || (18 >= day && month === 2)) {
		return "&nbsp♒︎Bảo Bình&nbsp";
	} else if ((19 <= day && month === 2) || (20 >= day && month === 3)) {
		return "&nbsp♓︎Song Ngư&nbsp";
	}
}
function sex(x) {
	if (x === "nam") {
		return '<i class="fa fa-mars nam"></i>';
	} else if (x === "nu") {
		return '<i class="fa fa-venus nu"></i>';
	}
}
function info() {
	const cung1 = document.querySelector("#cung1");
	const cung2 = document.querySelector("#cung2");
	const sex1 = document.querySelector("#sex1");
	const sex2 = document.querySelector("#sex2");
	const sn1 = document.querySelector(".sn1");
	const sn2 = document.querySelector(".sn2");

	let when1 = new Date(ngaysinh1);
	let when2 = new Date(ngaysinh2);
	let todate = new Date();
	let time1 = Math.ceil((todate - when1) / 1000 / 24 / 60 / 60) - 1;
	let time2 = Math.ceil((todate - when2) / 1000 / 24 / 60 / 60) - 1;

	let ns1 = new Date(ngaysinh1);
	let ns2 = new Date(ngaysinh2);
	let day1 = ns1.getDate();
	if (day1 < 10) {
		day1 = "0" + day1;
	}
	let month1 = ns1.getMonth() + 1;
	if (month1 < 10) {
		month1 = "0" + month1;
	}
	let year1 = ns1.getFullYear();
	let day2 = ns2.getDate();
	if (day2 < 10) {
		day2 = "0" + day2;
	}
	let month2 = ns2.getMonth() + 1;
	if (month2 < 10) {
		month2 = "0" + month2;
	}
	let year2 = ns2.getFullYear();

	cung1.innerHTML = checkcung(ngaysinh1);
	cung2.innerHTML = checkcung(ngaysinh2);
	sex1.innerHTML = `<div class="sex1">&nbsp<div class="nam">${Math.ceil(
		time1 / 365
	)}${sex(gioitinh1)}</div>&nbsp</div>`;
	sex2.innerHTML = `<div class="sex2">&nbsp<div class="nu">${Math.ceil(
		time2 / 365
	)}${sex(gioitinh2)}</div>&nbsp</div>`;
	sn1.innerHTML = `${day1}-${month1}-${year1}`;
	sn2.innerHTML = `${day2}-${month2}-${year2}`;
}
// !Cung

// !Counter
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
// *Process days
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
// *Calender
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
// *Clock
function clock() {
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

	start.innerHTML = `${whenday}-${whenmonth}-${whenyear}`;

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
}
info();
process();
dayruner();
calander();
clock();
// !Counter

// !Loop
function loop() {
	clock();
	setTimeout(loop, 1000);
}
loop();
// !Loop
