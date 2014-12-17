/* Copyright (c) 2014 Jonathan Herman - MIT License */
/* https://github.com/jdh11235/JSchunks */

//the complete Fibonacci Series up to (and including) n
function generateF( n ){
	var F = [0, 1];

	for(var i = 2; i <= n; i++ ){
		F[i] = F[i - 2] + F[i - 1];
	}

	return F;
}

//the nth number in the Fibonacci Series
function fib( n ){
	return generateF(n)[n];
}

//the approximated Golden Ratio calculated with precision (number of iterations) p
function goldenRatio( p ){
	var F = generateF(p);

	return F[p] / F[p - 1];
}
