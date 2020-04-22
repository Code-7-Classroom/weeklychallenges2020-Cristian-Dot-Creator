let arry = [1 , 4 , 7]


var sum = arry.reduce(function(a,b){
    return (a + b) /arry.length;
}, 0);


console.log(sum);