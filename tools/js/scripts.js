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

// !Xem thứ
function getRealTime() {
	const input = document.querySelector("#gettime");
	const time1 = new Date();

	let day = time1.getDate();
	let month = time1.getMonth() + 1;
	let year = time1.getFullYear();
	if (day - 10 < 0) {
		day = "0" + day;
	}
	if (month - 10 < 0) {
		month = "0" + month;
	}

	input.value = `${year}-${month}-${day}`;
}
function get() {
	const timegot = document.querySelector("#gettime").value;
	const logtime = document.querySelector("#time");
	const resultdiv = document.querySelector("#result");
	const [year, month, day] = timegot.split("-");

	let date = `${month}/${day}/${year}`;
	let time = new Date(date);
	const weekday = [
		"Chủ Nhật",
		"Thứ Hai",
		"Thứ Ba",
		"Thứ Tư",
		"Thứ Năm",
		"Thứ Sáu",
		"Thứ Bảy",
	];
	let day0 = weekday[time.getDay()];

	let day1 = time.getDate();
	let month1 = time.getMonth() + 1;
	let year1 = time.getFullYear();
	if (day1 - 10 < 0) {
		day1 = "0" + day1;
	}
	if (month1 - 10 < 0) {
		month1 = "0" + month1;
	}

	resultdiv.classList.remove("remove");
	logtime.innerHTML = `Ngày ${day1} Tháng ${month1} Năm ${year1} là ${day0}`;
}
// !Xem thứ
// !Đếm ngày
function getTime() {
	const input1 = document.querySelector("#gettime1");
	const input2 = document.querySelector("#gettime2");
	let time1 = new Date();

	let day = time1.getDate();
	let month = time1.getMonth() + 1;
	let year = time1.getFullYear();
	if (day - 10 < 0) {
		day = "0" + day;
	}
	if (month - 10 < 0) {
		month = "0" + month;
	}

	input1.value = `${year}-${month}-${day}`;
	input2.value = `${year}-${month}-${day}`;
}
const getDay = (t1, t2) => {
	let d1 = t1.getTime();
	let d2 = t2.getTime();

	if (d1 >= d2) {
		return Math.ceil((d1 - d2) / 1000 / 60 / 60 / 24);
	} else if (d1 < d2) {
		return Math.ceil((d2 - d1) / 1000 / 60 / 60 / 24);
	}
};
function getCountDays() {
	const resultdiv = document.querySelector("#result");
	const logtime = document.querySelector("#time");

	const input1 = document.querySelector("#gettime1");
	const input2 = document.querySelector("#gettime2");

	let timegot1 = input1.value;
	let timegot2 = input2.value;
	let [year1, month1, day1] = timegot1.split("-");
	let [year2, month2, day2] = timegot2.split("-");
	let timeshow1 = `${day1}-${month1}-${year1}`;
	let timeshow2 = `${day2}-${month2}-${year2}`;

	let date1 = `${month1}/${day1}/${year1}`;
	let date2 = `${month2}/${day2}/${year2}`;

	let time1 = new Date(date1);
	let time2 = new Date(date2);

	let day = getDay(time1, time2);

	resultdiv.classList.remove("remove");
	logtime.innerHTML = `Từ ${timeshow1} đến ${timeshow2} cách nhau ${day} ngày`;
}
// !Đếm ngày
document.querySelector("#xemthu").addEventListener("click", xemthu);
document.querySelector("#demngay").addEventListener("click", demngay);
function active() {
	const blur = document.querySelector("blur");
	blur.classList.remove("remove");
}
function xemthu() {
	active();
	const blur = document.querySelector("blur");
	blur.innerHTML =
		'<div class="xemthu"><div class="tool"><div id="close"><i class="fa-solid fa-xmark"></i></div><div class="get"><label for="gettime">Chọn ngày</label><input type="date" id="gettime" /><button id="get">Kiểm tra</button></div><div id="result" class="remove"><h1 id="time"></h1></div></div></div>';
	getRealTime();
	document.querySelector("#get").addEventListener("click", get);
	document.querySelector("#close").addEventListener("click", close);
}
function demngay() {
	active();
	const blur = document.querySelector("blur");
	blur.innerHTML =
		'<div class="demngay"><div class="tool"><div id="close"><i class="fa-solid fa-xmark"></i></div><div class="get"><label for="gettime">Chọn ngày</label><input type="date" id="gettime1" /><input type="date" id="gettime2" /><button id="get">Kiểm tra</button></div><div id="result" class="remove"><h1 id="time"></h1></div></div></div>';
	getTime();
	document.querySelector("#get").addEventListener("click", getCountDays);
	document.querySelector("#close").addEventListener("click", close);
}
function close() {
	const resultdiv = document.querySelector("#result");
	const blur = document.querySelector("blur");
	blur.classList.add("remove");
	resultdiv.classList.add("remove");
	document.querySelector("#get").removeEventListener("click", get);
	document.querySelector("#get").removeEventListener("click", getCountDays);
	blur.innerHTML = "";
}
