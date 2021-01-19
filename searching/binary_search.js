/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    var guess_idx = 1;

    println('Target Value: ' + targetValue);

    while(max >= min){
        guess = Math.floor((max + min)/2);

        println('Guess: ' + array[guess]);

        if(array[guess] === targetValue){
            println('Guessed correctly');
            println('Guesses taken: ' + guess_idx);
            return guess;}

        else if (array[guess] > targetValue){
            println('Guess too high');
            max = guess - 1;}

        else {min = guess + 1;}

        guess_idx += 1;
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 10), -1);
Program.assertEqual(doSearch(primes, 5), 2);
