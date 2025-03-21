/*
  https://eloquentjavascript.net/04_data.html#h-TcUD2vzyMe

  Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(array: any[]) {
  let reversedArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}

let myArray = ["A", "B", "C"];

console.log(reverseArray(myArray));
console.log(myArray);
// → ["C", "B", "A"];
// → ["A", "B", "C"];

function reverseArrayInPlace(array: any[]) {
  let arrayCopy = array.slice();
  array.length = 0;
  for (let i = 0; i < arrayCopy.length; i++) {
    array.unshift(arrayCopy[i]);
  }
  console.log(array);
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
