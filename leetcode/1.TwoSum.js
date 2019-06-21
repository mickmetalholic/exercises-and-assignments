var twoSum = function(nums, target) {
    let hash = {};
    let len = nums.length;
    for(let i = 0; i < len; i++) {
      let cur = nums[i];
      if((target - cur) in hash) {
          return [hash[target - cur], i];
      } else {
          hash[cur] = i;
      }
    }
};