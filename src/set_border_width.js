// This is the button click handler. Function that gets called when
// a button is clicked.
var setBorderWidth = function(width) {
  document.getElementById("img1").style.borderWidth = width + "px";
}

// get button elements
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

button1.addEventListener(event,handler,false);
button2.addEventListener(event,handler,false);
