var Person = function (name, job, age) {
    Programmer.call(this, name, job, age); //parent to the child 
  this.name = name;
  this.job = job;
  this.age = age;
  this.profession = function() {
      console.log(this.name +' is a ' + this.job);
  }
  this.exercise = function() {
       console.log(this.name + "Running is fun! - said no one ever");
  }
}
var Programmer = function(language, busy) {
  this.language = language;
  this.busy = busy;
  this.completeTask = function() {
      this.busy = false
      if(this.busy == false){
      console.log(this.name + 'is not busy');
      }
      else{
          return this.name + 'is busy';
      }
  }
  this.acceptNewTask = function() {
      this.busy = true
      if(this.busy == true){
          console.log(this.name + 'is busy');
          }
          else{
              return this.name + 'would like to take the work.';
          }   
      }
      this.offerNewTask = function() {
          if(this.busy == true){
              console.log(this.name +  "Mark can't accept any new tasks right now.");
              }
              else{
                  return this.name +" Mark would love to take on a new responsibility.";
              }
          }
          this.learnLanguage = function () {
              this.language = ["java", "node", "javascript"]
              console.log(this.name + " is learning these languages " + this.language);
          }
          this.listLanguage = function () {
              this.language = ["react", "node", "python", "c#"]
              console.log(this.name + " already knows these languages " + this.language)
          }
      }
Person.prototype = Object.create(Programmer.prototype);
Person.prototype.constructor === Programmer;
var john = new Person('John ',' Front-end developer ', 24);
var mary = new Person('Mary ', ' Back-end developer ', 22);
john.exercise();
mary.exercise();
john.profession();
mary.profession();
john.completeTask();
mary.acceptNewTask();
console.log(john.offerNewTask());
john.learnLanguage() + john.listLanguage();