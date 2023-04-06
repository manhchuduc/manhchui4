var ngaysinh1 = "04/29/2009";
var gioitinh1 = "nam";
var ngaysinh2 = "04/29/2009";
var gioitinh2 = "nu";

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
function run() {
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
run();
