var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function theBest(tasksList) {
    var max = 0;
    var persone;
    for (name in tasksList) {
        if (tasksList[name] > max) {
            max = tasksList[name];
            persone = name;
        }
    }
    console.log(persone + ' : ' + max);
}

theBest(tasksCompleted);