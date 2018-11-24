var name = 'admin', text;
(name == 'admin') ? text = 'Hi':(name == 'manager') ? text = 'Hello' : (name == '') ? text = 'No login' : text = '';
console.log(text);
