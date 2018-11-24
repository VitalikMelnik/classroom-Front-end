function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    return !!(~lowerStr.indexOf('spam') || ~lowerStr.indexOf('sex')); 
}
alert( checkSpam('get new Sex videos') );
alert( checkSpam('[SPAM] How to earn fast money?') ); 
alert( checkSpam('New PSD template') ); 