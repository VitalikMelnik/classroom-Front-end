function task5(a, b) {
    var hashtag = '#';
    var space = ' ';
    var doska = '';
    for (var i = 1; i <= b; i++) {
        var c = 0;
        var d = 0;
        if (!(i % 2 == 0)) {
            while (c < a) {
                doska += hashtag;
                c++;
                doska += space;
                c++;
                if (c == a) {
                    doska += '\n';
                }
            }
        }
        if (i % 2 == 0) {
            while (d < a) {
                doska += space;
                d++;
                doska += hashtag;
                d++;
                if (d == a) {
                    doska += '\n';
                }
            }
        }
    }
    console.log(doska);
}

task5(8, 8);