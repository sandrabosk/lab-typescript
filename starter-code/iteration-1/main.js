var myTaskList = (function () {
    function myTaskList() {
        this.tasks = [];
    }
    myTaskList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("task: " + task);
        return this.tasks.length;
    };
    myTaskList.prototype.listAllTasks = function () {
        console.log("List all tasks: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    myTaskList.prototype.deleteTask = function (task) {
        var foundTask = this.tasks.indexOf(task);
        this.tasks.splice(foundTask, 1);
        return this.tasks.length;
    };
    return myTaskList;
}());
var tasklist = new myTaskList();
console.log("Number of items:", tasklist.addTask('This is our first task'));
console.log("Number of items:", tasklist.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 3!! 🤓'));
tasklist.listAllTasks();
console.log("Number of items:", tasklist.deleteTask('Finish this iteration 1!! 🤓'));
tasklist.listAllTasks();
