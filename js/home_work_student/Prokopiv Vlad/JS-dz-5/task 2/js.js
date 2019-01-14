var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obg) {
    for (value in obg) {
        if (typeof obg[value] == 'number') {
            obg[value] *= 2;
        }
    }
    return obg;
}

console.log(image);
multiplyNumeric(image);
console.log(image);
