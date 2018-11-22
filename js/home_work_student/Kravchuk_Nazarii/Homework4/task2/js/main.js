function checkSpam(a) {
    var check1 = /spam/i;
    var check2 = /sex/i;

    if (a.match(check1) || a.match(check2)) {
        console.log('This is SPAM!');
    } else {
        console.log('Everything is OK.');
    }
}

checkSpam('New PSD template');