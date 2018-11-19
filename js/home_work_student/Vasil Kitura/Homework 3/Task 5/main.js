function chess(a , b) {
    var desk = '';
    for (let i = 1; i <= b; i++) {
        var couple = 0;
        var notcouple = 0;
        if(!(i % 2 == 0)){
            while (notcouple < a) {
                desk = desk + '# ';
                notcouple += 2;
                if(notcouple == a){
                    desk = desk + '\n';
                }
            }
        }        
    if (i % 2 == 0) {
        while (couple < a) {
            desk = desk + ' #';
                couple += 2;
                if(couple == a){
                    desk = desk + '\n';
                }
        }
    }
}
console.log(desk);
}
chess(8 , 8)

