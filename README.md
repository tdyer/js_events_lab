# Four event-related actions
  * Registering an event handler
  * Getting the event object
  * Extracting info from the event object
  * Signalling that an event has been handled

# Step one
  * simple_onclick.html
  * simple2_onclick.html
  * simple3_onclick.html
  * simple_onchange.html
  * simple_onload.html
  * simple_onmouseover.html

# Code along
  Create page for a record company/label that will list a couple of it's artists. Initially, the page will show the description of the first artist in the list underneath the list of artists.
  When the user clicks on an artist only the description for this artist will be shown under the list of artists. And this artist's entry in the list of artist background will turn red.

# Step two
  * image_attributes.html
  * on_load.html

# Code along
  Using the record label page above. Start with an empty list of artists. Then allow users to add artists to the label. And artist should have a name and description that is entered via a form.

  Don't loose any of the functionality from the previous code along.

# Step three
  * index.html

# Code along
  Using the record lable page above.
  Attach a click handler to div that encloses the list of artists. Only this click handler will implement the functionality we've built for the artist list. (More discussion in class about this feature).
 Log, to the console, all the characters entered in the text box.

# Step four
  Let's look at the this point and how it may be difficult to deal with in
  an event handler.
  * event_this.html
  * Need to understand javascript, scope, this, call, apply and bind!!!
  * [Javascript this] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
  * [Binding scope in Javascript](http://www.robertsosinski.com/2009/04/28/binding-scope-in-javascript/)
  * event_this.html

# Code along
  Create an Artist class that will have a method used to handle click events on each artist. Click events should have the same functionality as above. Update description at bottom of page and highlight the clicked link.

## References
   * [Event Flow (bubbling)](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
   * [Standard Events](https://developer.mozilla.org/en-US/docs/Web/Reference/Events#Standard_events)
   * [Events W3C] (http://www.w3.org/TR/DOM-Level-3-Events/#event-interfaces)
   * [Event Types W3C](http://www.w3.org/TR/DOM-Level-3-Events/#event-types-list)
   * [DOM Events (Wikipedia)](http://en.wikipedia.org/wiki/DOM_events)
   * [This pointer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FOperators%2Fthis)
