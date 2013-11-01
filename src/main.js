// namespace for our application
var EventLab = EventLab || {};

EventLab.button1 = document.getElementById('button1');

// 1) Simple event handler
//EventLab.button1.addEventListener('click', function(){
// 	alert('You clicked the button');
// });

// 2) Abstract out the 2 ways to catch/handle an event
// register button1 click handler.
// registerEventHandler(button1, "click", showEvent);

// 3) Capture other events sent when clicking on the button.	
// Note the order of the events sent/generated.
registerEventHandler(button1, "dblclick", showEvent);
registerEventHandler(button1, "mousedown", showEvent);
registerEventHandler(button1, "mouseup", showEvent);

// 4) Show how events are 'bubbled up' to parent document elements.
// register a handler on the whole document.
// Every click event on any element in the document will be 
// "bubbled up" to the document
EventLab.body = document.getElementsByTagName('body')[0];
registerEventHandler(EventLab.body, "click", reportClick);

// 5) Generate an event in the chrome inspector/debugger.
// document.getElementById('button1').click();
