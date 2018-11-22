function fib(n) {
    f3 = 2;
    f4 = 3;
    if (n == 1 || n == 2) {
        console.log(1);        
    }
    if (n == 3) {
        console.log(f3);        
    }
    if (n == 4) {
        console.log(f4);
    } else {
        for (var i = 1; i < n-2; ) {
            f = f3 + f4;
            f3 = f;
            i++;
            if (i == n-3) {
                console.log(f);
                break;
            }
            f = f3 + f4;
            f4 = f;
            i++;
            if (i == n-3) {
                console.log(f);
            }
        }
    }
}

fib(7);