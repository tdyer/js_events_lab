var gaQuery = gaQuery || {};

// IE uses a different function to register/add/attach events
// handlers. Let abstract the out the 2 ways to handle events.
gaQuery.registerEventHandler = function(node, event, handler){
	if (typeof node.addEventListener === 'function'){
		node.addEventListener(event,handler,false);
	} else {
		// IE version.
		node.attachEvent('on' + event, handler);
	}
};

// IE uses a different function to unregister/remove/dettach events
// handlers. Let abstract this out.
gaQuery.unregisterEventHandler = function(node, event, handler) {
	if (typeof node.removeEventListener == "function"){
		node.removeEventListener(event, handler, false);
	}
	else{
		node.detachEvent("on" + event, handler);
	}
};

gaQuery.show = function(msg){
	console.log(msg);
	alert(msg);
};

gaQuery.showEvent = function(event){
	gaQuery.show(event);
};
