const get_day_of_time = (d1, d2) => {
	let ms1 = d1.getTime();
	let ms2 = d2.getTime();
	return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
};

let when = new Date("2022-11-2 13:45:00");

let today = new Date();

let time = get_day_of_time(when, today);

const day = document.getElementById("day");
const start = document.getElementById("start");
// start.innerHTML = "2022-11-2";
// day.innerHTML =
// 	time - 1 + ' <i class="fa-solid fa-heart fa-bounce heart"></i> Ngày';
