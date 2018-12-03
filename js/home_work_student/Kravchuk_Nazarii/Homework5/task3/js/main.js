function task3() {
    var arr = [];
    for (var i = 0; ;i++) {
        var newX = prompt("Введіть значення x");
        if (!(newX > 101) && !(newX < 101) && !(newX == 101) || newX == null || newX == '') {
            break;
        } else {
            arr[i] = +newX;
        }
    }
    console.log(arr);
    
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

task3();