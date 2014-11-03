function fib( n ) {
	return F(n)[n];
}

function generateF( n ){
	var F = [0, 1];

	for( i = 2; i <= n; i++ ){
		F[i] = F[i - 2] + F[i - 1]
	}

	return F;
}
