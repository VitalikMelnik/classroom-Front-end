var number;
    do {
        number = prompt("Введіть число більше 100");
        if (!(number > 101) && !(number < 101) && !(number == 101)) {
            alert('Треба ввести число більше 100');
            
        }
    } while (number < 101 && number !== null);
console.log(number);
