/*

A bottom-up fibonacci calculator that requires no recursion.
Starts with the lower numbers and works up
Constantly swaps out the variables for the next in the sequence
Conplexity is O(n) but requires less space than top down as only
storing 3 variables rather than a memo of values.

*/

var fib = function(n) {

    if (n === 0 | n === 1) {
        return n;
    }

    var twoBehind = 0;
    var oneBehind = 1;
    var result = 0;

    for (var i = 1; i < n; i--) {
        result = twoBehind + oneBehind;
        twoBehind = oneBehind;
        oneBehind = result;
    }

    return result

};


fib(5);
