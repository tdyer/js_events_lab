// namespace for our application
var EventLab = EventLab || {};

EventLab.person = new Person('alice', 33);
EventLab.setup = function(){
    EventLab.msg = document.getElementById('person-msg');
    EventLab.msg.innerHTML = EventLab.person.name + "'s age is " + EventLab.person.age + " in 2013";

    EventLab.inputMsg = document.getElementById('input-msg');
    EventLab.inputMsg.innerHTML = "Enter year to find " + EventLab.person.name + "'s  age in this year";

};

// registerEventHandler(document, "load", EventLab.setup);

// DOES NOT WORK, this is WRONG!!!
registerEventHandler(button1, "click", EventLab.person.showAgeWhen.bind(EventLab.person));
//registerEventHandler(button1, "click", EventLab.person.showAgeWhen.bind(EventLab.person));