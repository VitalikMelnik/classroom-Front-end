function string(str, maxlength) {
    if(str.length > maxlength){
        return str.slice(0, maxlength - 3) + '...';
    }
    return str;
}
alert( string("Напишіть функцію, яка приймає на вхід рядок і повертає її незмінною якщо її довжина не перевищує 20 символів.", 20));
alert(string("Я вивчаю JS!!!", 20 ))
