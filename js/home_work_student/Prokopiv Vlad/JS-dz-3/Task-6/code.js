function pow(x, n){
	var a = x;
	for(var i = 1; i < n; i++){
		x *= a;
	}
	console.log(x);
}
pow(2, 11);