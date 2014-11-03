function fib( n ) {
  return F(n)[n];
}

function F( n ){

	var Ftemp = [0, 1];
	
	for( i = 2; i <= n; i++ ){
		Ftemp[i] = Ftemp[i - 2] + Ftemp[i - 1]
	}

	return Ftemp;
}
