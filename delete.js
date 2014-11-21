/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

(function(){
	function handle(event) {
		event.preventDefault();
		var elm = event.toElement;
		elm.remove();
	};
	window.addEventListener('click', handle, false);
})();
