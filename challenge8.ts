/**
 * Given an n x m matrix, write a function to count the number of ways to get from (0,0) to (n,m) going only in the direction of m or n.
 */

const n = 4;
const m = 3;

let numSolutions: string[][] = [];

const solutions = (width: number, height: number, x: number = 0, y: number = 0, trace: string[] = []): void => {
	if (x < (width - 1)) {
		solutions(width, height, x + 1, y, [...trace, 'X']);
	}
	if (y < height - 1) {
		solutions(width, height, x, y + 1, [...trace, 'Y']);
	}
	if (x == width - 1 && y == height - 1) {
		numSolutions.push(trace);
	}
}

solutions(n, m);
console.log([[`There are ${numSolutions.length} solutions:`], ...numSolutions]);
