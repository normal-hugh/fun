const willSplit = (num1: number, num2: number): boolean => {
	return (num1 == 1 || (num1 == 2 && num2 <= 6)) ? true : false
}

//console.log(`${willSplit(1, 2)}/${willSplit(2, 7)}/${willSplit(2, 3)}/${willSplit(8, 1)}`);

let solutions: string[][] = []
const numPasses = (arr: number[], sol: string[]): void => {
	console.log(`New Pass (${arr}, ${sol}) with solutions ${solutions}`);
	if (arr[1] && willSplit(arr[0], arr[1])) {
		const sol1: string[] = sol.concat("" + arr[0] + arr[1])
		const sol2: string[] = sol.concat(arr[0].toString())
		const sol3: string[] = sol
		let tempArr = arr
		console.log(`${tempArr} will be shifted and diverge from ${arr}`)
		tempArr.shift()
		const arr1: number[] = tempArr
		console.log(`${arr1} should equal ${tempArr} but not ${arr}`)
		tempArr.shift()
		const arr2: number[] = tempArr
		const arr3 = arr
		console.log(`${sol1}(1), ${sol2}(2), ${sol3}(3), ${sol}(sol)`)
		console.log(`${arr1}(1), ${arr2}(2), ${arr3}(3), ${arr}(arr)`)
		numPasses(arr1, sol1)
		numPasses(arr2, sol2)
	} else if (arr[0]) {
		const newSol: string[] = sol.concat(arr[0].toString())
		let tempArr = arr
		tempArr.shift()
		const newArr: number[] = tempArr
		console.log(`${newArr}(arr), ${newSol}(sol), original: ${arr}(arr), ${sol}(sol)`)
		numPasses(newArr, newSol)
	} else {
		console.log(`Potential solutions: ${sol} with arr that should be empty ${arr}`)
	}
}

console.log(numPasses([9, 2, 1, 1, 2, 9], []))

