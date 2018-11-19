var login = prompt("login:");

if(login == 'admin'){
	var password = prompt('password:');
	if(password == 'passw0rd'){
		alert('hello');
	} else if (password == null) {
		alert('Canceled');
	} else {
		alert('wrong');
	}
} else if (login == null) {
	alert('Canceled');
} else {
	alert('wrong');
}

 