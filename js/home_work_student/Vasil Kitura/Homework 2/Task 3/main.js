var login = prompt('Введіть логін...');
if(login == 'admin'){
    var pass = prompt('Введіть будь ласка пароль');
    if(pass == 'passw0r'){
        alert('Ласкаво просимо додому!');
    }     else if(pass == null){
            alert('Скасовано (ಠ益ಠ)');
        }
        else {
            alert('Пароль не вірний!');
        }
}
else if(login == null){
    alert('Скасовано (ಠ益ಠ)');
}
else{
    alert('Доступ заборонено!');
}