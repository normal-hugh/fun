const arr = Array.from(Array(Math.floor(Math.random() * 50))).map(value => value = Math.floor(Math.random() * 50));
const k = Math.floor((Math.random() * 50) + 25);
console.log("Checking to see if two values in ", arr, " add up to ", k);

let solutions = []

const doubles = arr.reduce((acc, value) => {
	if (acc && acc.includes(k - value)) {
		solutions = solutions.concat([[value, k - value]])
	}
	return acc.concat(value)
}, [])

console.log(solutions)

solutions ? solutions = solutions.map(sol => sol[0] < sol[1] ? sol : [sol[1], sol[0]], []) : "Nope"

solutions = solutions.reduce((acc, value) => {
	console.log("ACC: ", acc)
	console.log("value: ", value)
	if (!acc) { 
		acc = [[value]]
		return acc
	}
	const boo = (JSON.stringify(acc).includes(JSON.stringify(value)))  
	if (boo) console.log("Hello") 
	acc = acc.concat([value])
	const butt = acc
	//acc = boo ? acc.concat([value]) : butt
	return butt

}, [])
console.log("Unique: ", solutions)

const x = [[1, 2], [3, 4], [5, 6]]
console.log(JSON.stringify(x).includes(JSON.stringify([3, 4])))
