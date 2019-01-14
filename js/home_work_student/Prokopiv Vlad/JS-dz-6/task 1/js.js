var obj = {
    className: 'open menu menu footer header'
};

function removeClass(obj, str){
    var classNames = obj.className.split(' ');
    for(var i = 0; i < classNames.length; i++){
        if(classNames[i] == str){
            classNames.splice(i , i+1);
        }
    }
    console.log(classNames);
}

removeClass(obj, 'menu');