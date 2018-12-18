function Calc() {
    var arr = [];
    for (var i = 0; ;i++) {
        var newNum = prompt("Введіть x");
        if (!(newNum > 101) && !(newNum < 101) && !(newNum == 101) || newNum == null || newNum == '') {
            break;
        } else {
            arr[i] = +newNum;
        }
    }
    console.log(arr);

    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert(sum);
}

Calc();