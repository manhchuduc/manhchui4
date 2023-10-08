num = false;
spe = false;

function randompass(length) {
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var number = "0123456789987654321";
	if (num) {
		chars += number;
	}
	var special = "!@#$%^&*()-_=+,./;[]<>?:";
	if (spe) {
		chars += special;
	}
	var pass = "";
	for (var i = 0; i < length + 1; i++) {
		vitri = Math.floor(Math.random() * chars.length + 1);
		pass += cut = chars.slice(vitri, vitri + 1);
	}
	return pass;
}
console.log(randompass(10));
