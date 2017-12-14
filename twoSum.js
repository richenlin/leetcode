// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 11, 15, 7], target = 9,

// Because nums[0] + nums[3] = 2 + 7 = 9,
// return [0, 3].

// my:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var temp, targetArr = [];
    for (var i = 0; i < nums.length; i++) {
        temp = nums.indexOf(target - nums[i]);
        if (temp > -1 && temp !== i) {
            targetArr.push(i);
            targetArr.push(temp);
            return targetArr;
        }
    }

};

console.log(twoSum([11, 2, 7, 15], 9));

// Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var _twoSum = function (nums, target) {
    var numLength = nums.length;
    if (numLength < 2)
        return nums;
    var hashT = {};
    for (var i = 0; i < numLength; i++) {
        if (hashT[target - nums[i]] || hashT[target - nums[i]] === 0) {
            return [hashT[target - nums[i]], i];
        }
        if (!hashT[nums[i]]) {
            hashT[nums[i]] = i;
        }
    }
};

console.log(_twoSum([11, 2, 7, 15], 9));
