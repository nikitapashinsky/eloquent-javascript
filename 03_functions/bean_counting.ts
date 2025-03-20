/*
  https://eloquentjavascript.net/03_functions.html#i-3rsiDgC2do

  Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

  Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.
*/

function countBs(string: string) {
  let count = 0;
  for (let char of string) {
    if (char === "B") {
      count++;
    }
  }
  return count;
}

function countChar(string: string, charToFind: string) {
  let count = 0;
  for (let char of string) {
    if (char === charToFind) {
      count++;
    }
  }
  return count;
}

function countBsNew(string: string) {
  return countChar(string, "B");
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerklak", "k"));
// → 4
console.log(countBsNew("BOBBY"));
// → 3
