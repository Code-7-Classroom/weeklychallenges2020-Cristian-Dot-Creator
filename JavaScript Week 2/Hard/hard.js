// HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 lbs
// Jerry - 	height: 10cm 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their
//  BMI’s. Create a Boolean variable containing information about whether Tom 
//  has a higher BMI than Jerry. Print a string to the console with the variable from step 3 
//  ( e.g. Is Tom’s BMI higher than Jerry’s? false).



var tom = {
    name: 'tom',
    mass: 8,
    height: 9,
    calcBMI: function()  {
      this.bmi  = this.mass / (this.height * this.height);
      return this.bmi
      }
  }
  var jerry = {
  name: 'jerry',
  mass: .1,
  height: 3.94,
  calcBMI: function()  {
    this.bmi  = this.mass / (this.height * this.height);
    return this.bmi
    }
  }
  
  tom.calcBMI();
  jerry.calcBMI();
  console.log(tom, jerry);
  
  if(tom.bmi < jerry.bmi){
    var tombmi = true
    console.log("Tom's BMI is bigger than Jerry's "+ tombmi);
  }
  else{
    var tombmi = false
    console.log("Jerry's BMI is bigger than Tom's "+ tombmi);
  }