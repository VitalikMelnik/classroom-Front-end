var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric() {
    for (key in image) {
        if (typeof image[key] == 'number') {
            image[key] = image[key] * 2;
        }
        console.log(image[key]);
    }
}

multiplyNumeric();
