function task3(a, b) {
    for (a; a < b; a++) {
        c = a % 3;
        d = a % 5;
        if (c !== 0 && d !== 0) {
            console.log(a);
        }
        if (c == 0) {
            console.log('Fizz');
        }
        if (d == 0 && c !== 0) {
            console.log('Buzz');
        }
    }
}

task3(1, 100);
