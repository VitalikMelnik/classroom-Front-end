function pow(x, n) {
    var a = x;
    for (var i = 1; i < n; i++) {
       a *= x;
    }
    console.log(a);
}

pow(3, 4);