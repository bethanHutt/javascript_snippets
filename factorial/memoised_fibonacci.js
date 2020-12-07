var memo = {};
var fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    // check if in the memo
    else if (memo[n]) {
        return memo[n];
    }

    // if not, calculate and add result to memo
    else {
        var result = fib(n-1) + fib(n-2);
        memo[n] = result;
        return result;
    }

};

fib(5);
