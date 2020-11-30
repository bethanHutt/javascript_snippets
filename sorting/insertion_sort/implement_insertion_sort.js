var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for(var curIndex = 1; curIndex < array.length; curIndex++) {
        insert(array, curIndex-1, array[curIndex]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [-20, 11, 0, 88, -1, 145, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [-20, -1, 0, 11, 42, 88, 145]);
