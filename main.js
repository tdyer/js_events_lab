var EventLab = EventLab || {};

EventLab.button1 = document.getElementById('button1');

//EventLab.button1.addEventListener('click', function(){alert('You clicked the button');});

// IE uses a different function to register/add/attach event
// handlers. Let abstract the out the 2 ways to handle events.
EventLab.registerEventHandler = function(node, event, handler){
	if (typeof node.addEventListener === 'function'){
		node.addEventListener(event,handler,false);
	} else {
		// IE version.
		node.attachEvent('on' + event, handler);
	}
};

var show = function(msg){
	console.log(msg);
	alert(msg);
};

// register button1 click handler.
// EventLab.registerEventHandler(EventLab.button1, "click",show('You clicked button1'));
EventLab.registerEventHandler(EventLab.button1, "click", function(){show('You clicked button1')});

// Move the above out into it's own js file, gaQuery.js