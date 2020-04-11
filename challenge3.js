/**
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i
 */
const arr = [1, 2, 3, 4, 5]

let bootlegArray = arr.reduce(total => total.concat(1), [])

const bootlegFactorial = arr.map((entry, i) => {
	bootlegArray = bootlegArray.map((_, subI) => subI !== i ? bootlegArray[subI] *= entry : bootlegArray[subI])
})

console.log("Input: ", arr, ", Output: ", bootlegArray)
