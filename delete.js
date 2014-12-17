/* Copyright (c) 2014 Jonathan Herman - MIT License */
/* https://github.com/jdh11235/JSchunks */

(function(){
	function handle(event) {
		event.preventDefault();
		var elm = event.toElement;
		elm.remove();
	};
	window.addEventListener('click', handle, false);
})();
