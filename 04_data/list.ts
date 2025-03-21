/*
  https://eloquentjavascript.net/04_data.html#i-nSTX34CM1M

  Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

  If you haven’t already, also write a recursive version of nth.
*/

type List = {
  value: number;
  rest: List | null;
};

function arrayToList(array: number[]): List {
  let list: List | null = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }
  return list as List;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list: List): number[] {
  let array: number[] = [];
  for (let node: List | null = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(value: number, rest: List | null): List {
  return {
    value: value,
    rest: rest,
  };
}

console.log(prepend(10, prepend(20, arrayToList([1, 2, 3]))));
// → {value: 10, rest: {value: 20, rest: ...}}

function nth(list: List, index: number): number | undefined {
  let i = 0;
  for (let node: List | null = list; node; node = node.rest) {
    if (i === index) {
      return node.value;
    }
    i++;
  }
  return undefined;
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

function nthRecursive(list: List | null, index: number): number | undefined {
  if (list === null) return undefined;
  if (index === 0) return list.value;

  // Basically only return list.value at when index = 0
  // If index = 2, call nthRecursive on the .rest property
  // Now index = 1, which is still not 0, call nthRecursive on the .rest again
  // Now index = 0, return list.value
  return nthRecursive(list.rest, index - 1);
}

console.log(nthRecursive(arrayToList([10, 20, 30]), 0));
// → 10
