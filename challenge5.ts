/**
* given an array of integers, find the first missing positive integer in linear time and constant space. 
* (e.g. [5, 3, 7, 1, 4] -> 2, [1, 2, 3, 4, 5, 6] -> 7)
*/

const testArr: number[] = [4, 3, 6, 78, 34, 89, 1, 2, 5, 7, 9]
let arr: number[] = Array((testArr.reduce((acc, cur) => cur > acc ? acc = cur : acc = acc)) + 1)
let ascArr: number[] = Array.apply(null, arr).map((_, i) => { return i })

const solution: number[] = testArr.map(cur => {
	return ascArr.includes(cur) ? ascArr.splice(ascArr.indexOf(cur), 1) : ""
})

console.log(ascArr[1], " is the first missing number in the array ", testArr)
