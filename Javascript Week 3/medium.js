var sharePizza = cutPizzaSlices(8);
    function cutPizzaSlices(slice) {
        return function(sharePizza) {
            return "Each person gets " +(slice/sharePizza).toFixed(2);
        };
    }
console.log(sharePizza(2));
console.log(sharePizza(3));