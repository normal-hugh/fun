const x1 = [1, 2];
const x2 = [1, 3, 5];
const x3 = [5, 6, 7];
const x = x2;
const n = 10;
const initialValue = { pattern: x, path: [], count: 0, total: 0 };

let successes = [];
const successList = ({ pattern: ptn, path: pth, count: cnt, total: ttl }) => {
	if (ttl > n) {
		return "Failure: " + pth;
	} else if (ttl == n) {
		successes.push(pth);
		return "Success: " + pth;
	} else {
		return ptn.map((i) => {
			const npth = pth.concat(i);
			return successList({
				pattern: ptn,
				path: npth,
				count: i,
				total: ttl + i
			})	
		})
	}
};

successList(initialValue);
console.log(successes);
console.log(successes.length, "total combinations");
