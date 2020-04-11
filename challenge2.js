/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 */
const arr = Array.from(Array(Math.floor(Math.random() * 50))).map(value => value = Math.floor(Math.random() * 50));
const k = Math.floor((Math.random() * 50) + 25);
console.log("Checking to see if two values in ", arr, " add up to ", k);

let solutions = []

// if includes doesn't count as a pass, solution in one pass
const doubles = arr.reduce((acc, value) => {
	if (acc && acc.includes(k - value)) {
		solutions = solutions.concat([[value, k - value]])
	}
	return acc.concat(value)
}, [])

// lower number before higher number
solutions ? solutions = solutions.map(sol => sol[0] < sol[1] ? sol : [sol[1], sol[0]], []) : "" 

// verbose object within array of objects check
const y = (arr, val) => JSON.stringify(arr).includes(JSON.stringify(val)) ? true : false

// remove duplicates
let dedups = []
solutions = solutions.map(cur => dedups = y(dedups, cur) ? dedups : dedups.concat([cur]))

console.log(dedups.length > 0 ? "Solutions (with duplicates removed):" : "No solutions.")
dedups.map(cur => console.log(cur))
