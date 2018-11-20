function Doshka(a, b) {
    var tag = '#';
    var space = ' ';
    var doska = '';
    for (let i = 1; i <= b; i++) {
        let l = 0;
        let k = 0;
        if (!(i % 2 == 0)) {
            while (l < a) {
                doska = doska + tag;
                l++;
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
                doska = doska + tag;
                k++;
                if (k == a) {
                    doska = doska + '\n';
                }
            }
        }
    }
    console.log(doska);
}

Doshka(8, 8);