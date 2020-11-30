var swap = function(array, firstIndex, secondIndex) {
    var stored_first_idx = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = stored_first_idx;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);

var testArray = [1, 2, 3, 4, 5];
swap(testArray, 2, 4);

println(testArray);
Program.assertEqual(testArray, [1, 2, 5, 4, 3]);

var testArray = [1, 2, 3];
swap(testArray, 1, 2);

println(testArray);
Program.assertEqual(testArray, [1, 3, 2]);

