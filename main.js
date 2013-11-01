var EventLab = EventLab || {};

EventLab.button1 = document.getElementById('button1');

//EventLab.button1.addEventListener('click', function(){
// 	alert('You clicked the button');
// });

// register button1 click handler.
registerEventHandler(button1, "click", showEvent);	
registerEventHandler(button1, "dblclick", showEvent);
registerEventHandler(button1, "mousedown", showEvent);
registerEventHandler(button1, "mouseup", showEvent);

