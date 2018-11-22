function strLength(a) {
    if (a.length <= 20) {
        console.log(a);
    } else {
        console.log(a.substring(0, 20) + '...');
    }
}


strLength('12345678901234567890');