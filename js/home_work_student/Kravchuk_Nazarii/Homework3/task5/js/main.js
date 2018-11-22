function task5(a, b) {
    var hashtag = '#';
    var space = ' ';
    var doska = '';
    for (var i = 1; i <= b; i++) {
        var l = 0;
        var k = 0;
        if (!(i % 2 == 0)) {
            while (l < a) {
                doska = doska + hashtag;
                l++;
                if (l == a) {
                    doska = doska + '\n';
                    break;
                }
                doska = doska + space;
                l++;
                if (l == a) {
                    doska = doska + '\n';
                }
            }
        }
        if (i % 2 == 0) {
            while (k < a) {
                doska = doska + space;
                k++;
                if (k == a) {
                    doska = doska + '\n';
                    break;
                }
                doska = doska + hashtag;
                k++;
                if (k == a) {
                    doska = doska + '\n';
                }
            }
        }
    }
    console.log(doska);
}

task5(8, 8);