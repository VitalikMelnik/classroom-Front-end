function string(str, max) {
    if(str.length > max){
        return str.slice(0, max - 3) + '...';
    }
    return str;
}
alert( string("Мельник знає хто найкарщий друг Путіна, читати далі це дуже цікаво", 55));

