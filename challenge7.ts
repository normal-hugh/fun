/**
Create a queue using two stacks. 
add to queue solved in O(1)
remove from queue solved in O(n) with two passes
*/

const addToStack = (num: number, stack: number[]): number[] => {
	return [...stack, num];
}

const removeFromStack = (stack: number[]): number[] => {
	stack.pop();
	return stack;	
}

const addToQueue = (num: number, queue: number[]): number[] => {
	return addToStack(num, queue);
}

const flipStack = (stack: number[]): number[] => {	
	return stack.map((_, i, arr) => {
		return arr[arr.length - (i + 1)];
	});
}

const removeFromQueue = (queue: number[]): number[] => {
	return flipStack(removeFromStack(flipStack(queue)));
}

const queue = [1, 2, 6, 4, 8, 7, 5];

console.log(`Adding 3 to ${queue}`);
console.log(addToQueue(3, queue));
console.log(`Removing first entry from ${queue}`);
console.log(removeFromQueue(queue));
