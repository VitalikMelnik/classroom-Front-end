function task2(a, b) {
    for (a; a < b; a++) {
        for (var c = a-1; c >= 1; c--) {
            d = a % c;
            if (d == 0 & c !== 1) {
                break;
            }
            if (d == 0) {
                console.log(a);
            }
        }
    }
}

task2(1, 10);