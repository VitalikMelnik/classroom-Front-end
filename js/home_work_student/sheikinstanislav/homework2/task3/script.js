
var login = prompt('Please, enter your login.');

if (login == 'admin') {
    var password = prompt('Please, enter password.')
    if (password == 'passw0rd') {
        alert('Welcome home!');
    } else if (password !== 'passw0rd' && password !== null) {
        alert('Wrong password.');
    } else if (password == null) {
        alert('Canceled.');
    }
}