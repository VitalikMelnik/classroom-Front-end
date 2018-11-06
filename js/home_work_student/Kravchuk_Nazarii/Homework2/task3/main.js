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
} else if (login !== 'admin' && login !== null) {
    alert('Access denied.');
} else if (login == null) {
    alert('Canceled.');
}



// OR

// if (login == 'admin') {
//     var password = prompt('Please, enter password.') 
//     if (password == 'passw0rd') {
//         alert('Welcome home!');
//     } else if (password == null) {
//         alert('Canceled.');
//     } else if (password !== 'passw0rd' && password !== null) {
//         alert('Wrong password.');
//     }
// } else if (login == null) {
//     alert('Canceled.');
// } else {
//     alert('Access denied.');
// }