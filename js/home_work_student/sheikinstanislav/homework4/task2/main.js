function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('sex') || ~lowerStr.indexOf('spam'));
}

alert( checkSpam('get new Sex videos') );
alert( checkSpam('[SPAM] How to earn fast money?') );
alert( checkSpam('New PSD template') );