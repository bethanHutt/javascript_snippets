var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var minIndex;

    for(var idx = 0; idx < array.length; idx++) {
        minIndex = indexOfMinimum(array, idx);
        swap(array, idx, minIndex);
    }

    return array;
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [5, 0, -4, 12, 3, -12, 25, 8];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [-12, -4, 0, 3, 5, 8, 12, 25]);
