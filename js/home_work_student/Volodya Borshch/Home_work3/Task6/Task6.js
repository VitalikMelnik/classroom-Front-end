function pow(x, n) {
    var a = x;
    for (var i = 1; i < n; i++) {
       a = a * x;
    }
    console.log(a);
}

pow(2, 4);