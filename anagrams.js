//hangs with more than 9 chars
function anagrams (start, word) {

	//makes start optional
	if (!word) {

		word = start;
		start = '';

	}

	if (word.length === 1) {

		return [ start + word ];

	} else {

		var returnResult = [];
		for (var i = 0; i < word.length; i++) {
			var result = anagrams(word[i], word.slice(0, i) + word.slice(i + 1));
			for (var j = 0; j < result.length; j++) {
				returnResult.push(start + result[j]);
			}
		}
		return returnResult;

	}
}
