String.prototype.randomAnagram = function () {
	return this.split('').sort(function () {
		return 0.5 - Math.random();
	}).join('');
}
