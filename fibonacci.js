function fib( n ) {
	return generateF(n)[n];
}

function generateF( n ){
	var F = [0, 1];

	for( i = 2; i <= n; i++ ){
		F[i] = F[i - 2] + F[i - 1];
	}

	return F;
}

function goldenRatio( precision ) {
	var F = generateF(precision);

	return F[precision] / F[precision - 1];
}
