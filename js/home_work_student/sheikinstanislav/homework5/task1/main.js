var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function topOne() {
    var tasks = 0;
    for (key in tasksCompleted) {
        if (tasksCompleted[key] > tasks) {
            tasks = tasksCompleted[key];
            var name = key;
        }
    }
    console.log(name);
}

topOne();