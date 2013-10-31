var EventLab = EventLab || {};

EventLab.button1 = document.getElementById('button1');

//EventLab.button1.addEventListener('click', function(){alert('You clicked the button');});



// register button1 click handler.
// EventLab.registerEventHandler(
gaQuery.registerEventHandler(EventLab.button1, "click", function(event){gaQuery.showEvent(event);});

