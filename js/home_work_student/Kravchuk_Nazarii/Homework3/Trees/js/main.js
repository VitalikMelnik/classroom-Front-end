function tree(n) {
    for (var i = 0; i < n; i++) {
        if (i == 0) {
            var a = '#';
        }
        for (var j = 0; j < n; j++) {
            console.log(a);
            break;
        }
        a = a + '#';
    }
}


function christmasTree(n) {
    for (var i = 0; i < n; i++) {
        if (i == 0) {
            var a = '#';
        }
        var b = ' ';
        for (var j = 0; j < n - i; j++) {
            b = b + ' ';
        }
        c = b + a + b;
        console.log(c);
        
        a = a + '##';
    }
}

tree(20);
christmasTree(20);