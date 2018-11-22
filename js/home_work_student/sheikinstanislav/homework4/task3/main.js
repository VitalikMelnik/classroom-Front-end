function tridot() {
    var a = prompt('vvedit` ryadok');

    if (a.length>20){
        alert(a.substring(0, 20)+'...');
    }
    else{
        alert(a);
    }
}

tridot();