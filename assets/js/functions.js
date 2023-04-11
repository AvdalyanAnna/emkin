const numberWithSpaces = function (x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
const zeroPad = (num, places = 2) => String(num).padStart(places, '0')

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
	numberWithSpaces,
	numberWithDots,
	zeroPad,
	getRandomArbitrary,
	getRandomInt,
}