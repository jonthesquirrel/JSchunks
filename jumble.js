/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

var elm = document.querySelectorAll('.timelineUnitContainer *'); //example for facebook, change selector as necessary
function rand(min, max) {
  var range = max - min + 1;
  return Math.floor(Math.random()*range + min);
}
for (i = 0; i < elm.length; i++) {
  elm[i].style.transform = 'rotate(' + rand(0, 360) + 'deg)';
}
