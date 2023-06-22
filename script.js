function threeSum(arr, target) {
  let near = Infinity;
  
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (Math.abs(sum - target) < Math.abs(near - target)) {
          near = sum;
        }
      }
    }
  }
  
  return near;
}

module.exports = threeSum;
