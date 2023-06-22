function threeSum(arr, target) {
// write your code here
	let near = Infinity;
	for (let i = 0; i < arr.length-2; i++) {
		for (let j = i+1; j < arr.length-1; j++) {
			for (let k = j+1; k < arr.length; k++) {
				if (arr[i]+arr[j]+arr[k] >= 0 && (arr[i]+arr[j]+arr[k])-target < near) {
					near = arr[i]+arr[j]+arr[k];
				}
			}
		}		
	}
return near
}

module.exports = threeSum;
