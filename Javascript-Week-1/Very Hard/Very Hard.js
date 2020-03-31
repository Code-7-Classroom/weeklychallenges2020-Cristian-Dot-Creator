var userInput = prompt("Pick a Number");
var operator = prompt('enter an operation');
var userInput2 = prompt('Pick another number');


var parse = parseInt(userInput);
var parse2 = parseInt(userInput2);

switch (operator) {
    case '+' : answer = parse + parse2; 
    break;
    case '-' : answer = parse - parse2;
    break;
    case '*' : answer = parse * parse2;
    break;
    case '/' : answer = parse / parse2; 
}
console.log(parse + operator + parse2 + '=' + answer);





// if (operator === "+") {
//     console.log(userInput +  +  userInput2 + ' = ' + add(parseInt(userInput), parseInt(userInput2)));
// } else if (operator === "-"){
//     console.log(userInput +  +  userInput2 + ' = ' + subtract(parseInt(userInput), parseInt(userInput2)));
// } else if (operator === "*") {
//     console.log(userInput + + userInput2 + '=' + multiply(parseInt(userInpu), parseInt(userInput2)));
// }else if (operator === "/") {
//     console.log(userInput + + userInput2 + '=' + divide(parseInt(userInpu), parseInt(userInput2)));
// }



