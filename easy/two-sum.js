/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];
//methode brute force solution (avec loop)
    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                let a = nums[i] + nums[j];
                if (a === target) {
                    result.push(i, j);
                    return result;
                }
            }

        }

    }
//methode avec mapp
const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i)
    }


};