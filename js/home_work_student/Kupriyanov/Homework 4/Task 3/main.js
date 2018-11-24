function SliceText(text){
    return (text.length<=20) ? text : text.slice(0,20)+'...';
}
console.log(SliceText('Some text which will get sliced after 20th symbol!'));
