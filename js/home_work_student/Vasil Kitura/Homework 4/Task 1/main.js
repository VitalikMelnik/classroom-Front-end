//Повертає n-е число Фібоначчі за допомогою циклу
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
console.log( fib(3) );
console.log( fib(7) );
console.log( fib(77) );

//Повертає n-е число Фібоначчі за допомогою рекурсії
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + (n - 2);
}
console.log( fib(3) );
console.log( fib(7) );
console.log( fib(77) );