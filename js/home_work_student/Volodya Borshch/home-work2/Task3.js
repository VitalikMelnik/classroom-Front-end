var login = prompt('Введіть ваш логін');
if (login=='admin') {
	var password = prompt('Введіть пароль');
	if (password =='1234567890') {
		alert('Ласкаво просимо в дома');
	}
	else if (password !=='1234567890' && password!==null) {
		alert('Wrond password');
	}else if(password==null){
		alert('Canceled');
	}
	}else if (login !== 'admin' && login !== null) {
		alert('Access define');
	}
	else if (login==null) {
		alert('Canceled');
	}

