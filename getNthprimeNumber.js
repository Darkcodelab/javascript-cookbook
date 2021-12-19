const getNthPrimeNumber = (n) => {
	let prime = [], i = 1;
	while (i++ && prime.length < n) prime.reduce((a,c) => (i%c) * a, 2) && prime.push(i);
	return prime.length ? prime.pop() : -1;
}


console.log(2, getNthPrimeNumber(2));
console.log(5, getNthPrimeNumber(5));
console.log(10, getNthPrimeNumber(10));
