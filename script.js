var numbers = [1, 2, 3, 4, 5,6];

//routing to calculation the sum
function sum(n) {
	var summation = 0;
	summation = n.reduce((o, n) => { return o + n; })
	return summation;
}

console.log(sum(numbers));