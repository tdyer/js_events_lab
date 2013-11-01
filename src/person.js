var Person = function(my_name, my_age){
    this.name = my_name;
    this.age = my_age;
}

Person.prototype.ageWhen = function(year){
 return this.age - (2013 - year);
}

// Event handler
Person.prototype.showAgeWhen = function(event){
 var input = document.getElementById('text1').value,
 out = document.getElementById('output'),
 year = parseInt(input), was_age;

 // this pointer MAY be  WRONG here!!!!
 wasAge = this.ageWhen(year);

 out.innerHTML = wasAge;
}

