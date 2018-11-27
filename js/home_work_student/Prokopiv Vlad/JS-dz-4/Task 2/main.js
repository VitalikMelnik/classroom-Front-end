function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    return !!(~lowerStr.indexOf('spam') || ~lowerStr.indexOf('sex')); 
}
alert( checkSpam('get new Sex videos') ); 