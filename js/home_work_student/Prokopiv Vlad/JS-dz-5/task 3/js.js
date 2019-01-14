function simpleCalcut() {
    var numbers = [];
    var i = 0;
    while(true) {
        var newNum = prompt('Enter new Num ' + i + ' :');
        if(newNum == null || newNum == '' || !(newNum > 1) && !(newNum < 1) && !(newNum == 1)){
            break;
        }
        numbers[i] = +newNum;
        i++;
    }
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    alert('Sum = ' + sum);
}

simpleCalcut();