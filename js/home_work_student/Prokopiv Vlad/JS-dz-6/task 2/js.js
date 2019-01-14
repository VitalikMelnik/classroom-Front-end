var arr = ['HTML', 'JavaScript', 'CSS'];

console.log(arr);

var arrSorted = arr.sort(function(a, b){
    if(a < b){
        return -1;
    } else if(a > b) {
        return 1;
    } else {
        return 0;
    }
});



console.log(arrSorted);