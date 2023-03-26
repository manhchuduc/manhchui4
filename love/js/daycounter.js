var ngayyeu = "2022-11-2 13:30:00";
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
function change() {
	let ele = document.getElementById("day");
	let check = ele.classList.contains("date");
	if (check) {
		ele.classList.remove("date");
		date();
	} else {
		ele.classList.add("date");
		let when = new Date(ngayyeu);
		let todate = new Date();
		let time = get_day_of_time(when, todate);
		time -= 1;

		let year = time / 365;
		year = parseInt(year);
		let month = time / 30;
		month = parseInt(month);
		let day = time % 30;
		let week = day / 7;
		week = parseInt(week);
		day = day - week * 7;

		if (year === 0) {
			year = "";
		} else {
			year = year + 'năm <i class="fa-solid fa-heart fa-bounce heart"></i> ';
		}
		if (month === 0) {
			month = "";
		} else {
			month =
				month + 'tháng <i class="fa-solid fa-heart fa-bounce heart"></i> ';
		}
		if (week === 0) {
			week = "";
		} else {
			week = week + 'tuần <i class="fa-solid fa-heart fa-bounce heart"></i> ';
		}
		if (day === 0) {
			day = "";
		} else {
			day = day + "ngày";
		}
		ele.innerHTML = year + month + week + day;
	}
}
function date() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let time = get_day_of_time(when, todate);
	time -= 1;

	const daycount = document.getElementsByClassName("counter")[0];
	const start = document.getElementById("start");

	let whenyear = when.getFullYear();
	let whenmonth = when.getMonth() + 1;
	let whenday = when.getDate();

	start.innerHTML = whenyear + "-" + whenmonth + "-" + whenday;
	daycount.innerHTML =
		time + ' <i class="fa-solid fa-heart fa-bounce heart"></i> Ngày';
}
function time() {
	let when = new Date(ngayyeu);
	let todate = new Date();
	let hour = get_hour(when, todate);
	let min = get_min(when, todate);
	let sec = get_sec(when, todate);
	if (hour == 0 && min == 0 && sec == 0) {
		time += 1;
	}
	if (hour == 0 && min >= todate.getHours()) {
		hour = parseInt(hour);
		hour += 23;
	}
	const clock = document.getElementById("clock");
	clock.innerHTML = hour + " : " + min + " : " + sec;
	setTimeout(time, 1000);
}
time();
function repeat() {
	let day = document.getElementById("day");
	let check = day.classList.contains("date");
	if (check) {
		setTimeout(repeat, 1000);
	} else {
		date();
	}
	setTimeout(repeat, 1000);
}
repeat();
