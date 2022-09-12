// Leetcode Chalenges

// Middle of the Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let arr = [head];
  while (arr[arr.length - 1].next != null) {
    arr.push(arr[arr.length - 1].next);
  }
  return arr[Math.trunc(arr.length / 2)];
};

// Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // if magazine length is less than ransom note length it cannot construct it, return false
  if (magazine.length < ransomNote.length) return false;

  // create an array of letters from magazine
  const magazineArray = magazine.split("");

  for (let i = 0; i < ransomNote.length; i++) {
    // if magazine array doesnt include current letter from ransom note, return false
    if (!magazineArray.includes(ransomNote[i])) {
      return false;
    }

    // if magazine array includes the letter create a variable that holds index position of letter
    const index = magazineArray.indexOf(ransomNote[i]);
    // remove that element from magazine array so it cant be used again
    magazineArray.splice(index, 1);
  }
  return true;
};

// Find Numbers with Even Number of Digits
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0;
  for (let i of nums) {
    const digitCount = String(i).split("").length;
    if (digitCount % 2 === 0) {
      result++;
    }
  }
  return result;
};

// Squares of a Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums
    .map((x) => x * x)
    .sort(function (a, b) {
      return a - b;
    });
};

// Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  return Math.max(maxCount, count);
};

// Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reversed = Number(String(x).split("").reverse().join(""));
  return reversed === x;
};

// Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
