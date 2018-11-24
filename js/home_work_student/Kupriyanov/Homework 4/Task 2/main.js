function checkSpam(message) {
    var lowerMessage = message.toLowerCase();
    return !!(~lowerMessage.indexOf('sex') || ~lowerMessage.indexOf('spam'));
}
console.log(checkSpam ('get new Sex videos')); 
console.log(checkSpam ('[SPAM] How to earn fast money?'));
console.log(checkSpam ('New PSD template'));