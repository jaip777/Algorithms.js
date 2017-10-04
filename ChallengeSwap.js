var swap = function(array, firstIndex, secondIndex) {
    var temp =array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

var testArray = [7, 9, 4];

swap(testArray, 0, 1);//swaps 7 and 9
println(testArray);
Program.assertEqual(testArray, [9, 7, 4]);//checks for correct order

swap(testArray, 1, 2);//swaps 7 and 4
println(testArray);
Program.assertEqual(testArray, [9, 4, 7]);//checks for correct order

swap(testArray, 0, 2);//swaps 9 and 7
println(testArray);
Program.assertEqual(testArray, [7, 4, 9]);//checks for correct order
