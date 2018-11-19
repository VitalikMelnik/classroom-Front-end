function shess(a, b) {
    var desk = '';
    for (var i = 1; i <= b; i++) {
        var nePara = 0;
        var para = 0;
        if (!(i % 2 == 0)) {
            while (nePara < a) {
                desk = desk + '# ';
                nePara += 2;
                if (nePara == a) {
                    desk = desk + '\n';
                }
            }
        }
        if (i % 2 == 0) {
            while (para < a) {
                desk = desk + ' #';
                para += 2;
                if (para == a) {
                    desk = desk + '\n';
                }
            }
        }
    }
    console.log(desk);
}

shess(8, 8);