function myTask1(){
	var number;
do{
	number = prompt('Set number great 100 : ', '');
	if(number == null){
		number = 1000;
	}
} while(number <= 100)

}

myTask1();