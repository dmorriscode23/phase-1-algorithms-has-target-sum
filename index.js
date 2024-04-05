function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The optimized function has a time complexity of 0(n) because it loops through the
  array only once.
 */

/* 
  Add your pseudocode here
Loop through the array using two nested loops.
In each iteration of the outer loop, fix one element.
In each iteration of the inner loop, check if any of the other elements, when added to the fixed element, equal the target.
If such a pair is found, return true.
If no such pair is found after checking all combinations, return false.
*/

/*
  Add written explanation of your solution here
  This optimized solution keeps track of the numbers we have seen so far using a hash table. 
  For each number, we calculate its complement (the number needed to reach the target sum when 
  added to the current number). f we have already seen this complement in any of the previous iterations, 
  it means there exists a pair that sums up to the target, and we return true. If we finish looping through the array 
  without finding such a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
