function roots(x , n) {
    var num = x;
    for( i = 1; i< n; i++){
        x *= x;
    }
    console.log(x);
}
roots(3 , 2)