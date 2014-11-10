/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

TriggerEvent = function(eventName, element) {
  var event = document.createEvent("HTMLEvents");
  event.initEvent(eventName, true, true);
  event.eventName = eventName;
  element.dispatchEvent(event);
};
