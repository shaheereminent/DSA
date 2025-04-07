/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i] // 0,1,2...
    let complement = target - current // 9 - current

    if (obj.hasOwnProperty(complement)) {
      console.log([obj[complement], i])
      return [obj[complement], i]
    } // remaining of target and current iteration ie 9 - 2

    obj[current] = i
  }
}

twoSum([2, 7, 11, 15], 17)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)
