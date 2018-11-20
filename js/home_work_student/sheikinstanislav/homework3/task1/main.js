function num() {
    let number;

    do {
        number = prompt("Введіть число більше 100.");
        if (!(number > 101) && !(number < 101) && !(number == 101)) {
            alert('Потрібно ввести число більше 100!');
            num();
        }
    } while (number < 101 && number !== null);
}

num();