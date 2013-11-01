var LogLevel = LogLevel || 'info';

var registerEventHandler = function(node, event, handler){
	if (typeof node.addEventListener === 'function'){
		node.addEventListener(event,handler,false);
	} else {
		// IE version.
		node.attachEvent('on' + event, handler);
	}
};

var unregisterEventHandler = function(node, event, handler) {
	if (typeof node.removeEventListener == "function"){
		node.removeEventListener(event, handler, false);
	}
	else{
		node.detachEvent("on" + event, handler);
	}
};

var show = function(msg){
	(LogLevel === 'debug' || LogLevel == 'info') && console.log(msg);
	LogLevel === 'debug' && alert(msg);
};

var showEvent = function(event){
	show("event type is " + event.type);
	show("target is " + event.target.outerHTML);
	show("current target is " + event.currentTarget.outerHTML);
	show("x and y coordinates are x = " + event.x + ", y = " + event.y);
};

function reportClick(event) {
  event = event || window.event;
  var target = event.target || event.srcElement;
  var pageX = event.pageX, pageY = event.pageY;
  if (pageX == undefined) {
    pageX = event.clientX + document.body.scrollLeft;
    pageY = event.clientY + document.body.scrollTop;
  }

  show("Mouse clicked at ", pageX, ", ", pageY,
        ". Inside element:");
  showEvent(event);
}
