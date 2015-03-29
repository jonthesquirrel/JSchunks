/* https://github.com/jdh11235/JSchunks */

Array.prototype.random = function() {
	return this[Math.floor(Math.random() * this.length)];
};
