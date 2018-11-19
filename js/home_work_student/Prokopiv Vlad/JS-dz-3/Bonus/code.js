function triangleLeft(a) {
    var b = '#';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            console.log(b);
            break;
        }
        b = b + '#';
    }
}

triangleLeft(8);

function christmasTree(n) {
    var a = '#';
    for (var i = 0; i < n; i++) {
        var b = ' ';
        for (var j = 0; j < n - i; j++) {
            b = b + ' ';
        }
        c = b + a + b;
        console.log(c);
        a = a + '##';
    }
}

christmasTree(8);
