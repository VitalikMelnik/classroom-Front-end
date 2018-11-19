function task1() {
    var number;

    do {
        number = prompt("Введіть число більше 100.");
        if (!(number > 101) && !(number < 101) && !(number == 101)) {
            alert('Потрібно ввести число!');
            task1();
        }
    } while (number < 101 && number !== null);
}

task1();