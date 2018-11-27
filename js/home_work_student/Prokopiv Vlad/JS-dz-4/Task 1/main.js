function fib(n) {
    var a = 1,
    b = 1;
    for (var i = 3; i <= n; i++){
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log( fib(10) );

function fibRec(n) {
    return n <= 1 ? n : fib(n - 1) + (n - 2);
}
console.log( fibRec(10) );
