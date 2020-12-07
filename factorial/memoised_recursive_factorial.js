/*

A memoised version of the recursive factorial solution.
Essentially compiling a lookup table as the fn is run to
reduce recursive calls to the fn.

This is only useful if repeated calls are made to the
fn during the program's execution.

*/

var memo = {};

var factorial = function(n) {
    if (n === 0) {
        return 1;
    } else if (memo.hasOwnProperty(n)) {
        return memo[n];
    } else {
        var result = factorial(n - 1) * n;
        memo[n] = result;
        return result;
    }
};

factorial(2);
factorial(5);
