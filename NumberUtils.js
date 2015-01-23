
function isEven (n) {
	return (Math.abs(n % 2) === 0);
}

function isOdd (n) {
	return (Math.abs(n % 2) === 1);
}

function isInt (n) {
	return ( (Math.abs(n % 2) === 1) || (Math.abs(n % 2) === 0) );
}
