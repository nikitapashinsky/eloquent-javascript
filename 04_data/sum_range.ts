/*
  https://eloquentjavascript.net/04_data.html#h-TcUD2vzyMe

  Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

  Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/

function range(start: number, end: number, step = start <= end ? 1 : -1) {
  let array: number[] = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else if (start > end) {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

function sum(range: number[]) {
  let sum = 0;
  for (let num of range) {
    sum += num;
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
