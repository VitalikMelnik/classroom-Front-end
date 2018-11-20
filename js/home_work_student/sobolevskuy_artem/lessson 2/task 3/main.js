login = prompt ('login');
if (login=='admin'){
password = prompt ('password');    
if (password=='passw0rd'){
alert ('Welcome home!')    
} else if (password==null){
alert ('Canceled')
} else {
alert ('Wrong password')
}
} else if (login==null){
alert ('Canceled');
} else {
alert ('Access denied')    
}
