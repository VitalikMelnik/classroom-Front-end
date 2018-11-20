var name;
do{
name = prompt ('Як тебе звуть ?');
result = confirm('Ви впевнені ?');
} while (result==false);
alert ('Привіт'+' '+name+'!');