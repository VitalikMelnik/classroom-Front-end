var user;
var developer = 'Bye';
user = developer;
developer = 'Hello';
alert(developer);
alert('What is you name?');
function infoName(){

	alert( 'It is your name : ' + document.getElementById('name').value + '?');
}
alert(user);