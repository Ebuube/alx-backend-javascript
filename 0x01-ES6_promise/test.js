const p = new Promise((resolve, reject) => {
	resolve({
		firstName: 'Ebube',
		lastName: 'Onwuta',
	});
});

p.then((result) => {
	// console.log(result);
	console.log(result.status);
	console.log(result.value);
});
