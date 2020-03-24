var normal = "talking normally"

var userInput = prompt('type in Uppercase if shouting, type in lowerCase if whispering, type normal');
if (userInput === userInput.toUpperCase()){
    console.log(userInput);
    console.log('the user is shouting');
} else if (userInput === userInput.toLowerCase()){
    console.log(userInput);
    console.log('the user is whispering');
} else {
    console.log(normal);
}
