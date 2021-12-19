const isPrimeNumber = num => {
	for (let i=2, s = Math.sqrt(num); i<=s; i++)
		if (num % i === 0) return false;
	return num > 1;
}


console.log(5, isPrimeNumber(5));
console.log(4, isPrimeNumber(4));
console.log(1, isPrimeNumber(1));
