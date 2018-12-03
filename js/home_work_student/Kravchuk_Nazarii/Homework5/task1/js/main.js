var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function maxTask() {
    var max = 0;
    for (key in tasksCompleted) {
        if (tasksCompleted[key] > max) {
            max = tasksCompleted[key];
        }
    }
    console.log(max);
}

maxTask();