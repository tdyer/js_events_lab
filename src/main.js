// namespace for our application
var EventLab = EventLab || {};

EventLab.button1 = document.getElementById('button1');
// All the different types of events
// https://developer.mozilla.org/en-US/docs/Web/Reference/Events#Standard_events
// http://www.w3.org/TR/DOM-Level-3-Events/#event-interfaces

// 1) Simple event handler
//EventLab.button1.addEventListener('click', function(){
// 	alert('You clicked the button');
// });

// 2) Abstract out the 2 ways to catch/handle an event
// register button1 click handler.
// registerEventHandler(button1, "click", showEvent);

// 3) Capture other events sent when clicking on the button.	
// Note the order of the events sent/generated.
// registerEventHandler(button1, "dblclick", showEvent);
// registerEventHandler(button1, "mousedown", showEvent);
// registerEventHandler(button1, "mouseup", showEvent);

// 4) Show how events are 'bubbled up' to parent document elements.
// register a handler on the whole document.
// http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
// Every click event on any element in the document will be 
// "bubbled up" to the document
 EventLab.body = document.getElementsByTagName('body')[0];
// registerEventHandler(EventLab.body, "click", reportClick);

// 4.1) Stop the event from bubbling up to parent elements in the 
// DOM
 registerEventHandler(EventLab.button1, "click", showEvent);
 registerEventHandler(EventLab.button1, "click", StopEvent);
 registerEventHandler(EventLab.body, "click", reportClick);

// 5) Generate an event in the chrome inspector/debugger.
// document.getElementById('button1').click();

// 6) Unregister event.
// unregisterEventHandler(document, "click", reportClick);

// 7) Register a handler for the text box keydown/up and keypress events.

EventLab.text1 = document.getElementById('text1');
//registerEventHandler(EventLab.text1, "keydown", printKeyCode);
// unregisterEventHandler(EventLab.text1, "keydown", printKeyCode);

// registerEventHandler(EventLab.text1, "keypress", printCharacter);
