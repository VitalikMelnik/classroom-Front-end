function chuslo(a, b) {
    for (a; a < b; a++) {
        for (let c = a-1; c >= 1; c--) {
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

chuslo(1, 10);