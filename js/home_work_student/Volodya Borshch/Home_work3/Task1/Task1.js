function task1() {
	// body...

var num;
do{
num  = prompt('Введіть число більше 100');

if(!(num>101) && !(num<101) && !(num==101)){
	alert('Потрібно ввести число');
	task1();
}
}
while(num<=100 && num!==null){
}
}
task1();