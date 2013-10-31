var gaQuery = gaQuery || {};

// IE uses a different function to register/add/attach event
// handlers. Let abstract the out the 2 ways to handle events.
gaQuery.registerEventHandler = function(node, event, handler){
	if (typeof node.addEventListener === 'function'){
		node.addEventListener(event,handler,false);
	} else {
		// IE version.
		node.attachEvent('on' + event, handler);
	}
};

gaQuery.show = function(msg){
	console.log(msg);
	alert(msg);
};
