"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("task: " + task);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("List all tasks: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var foundTask = this.tasks.indexOf(task);
        this.tasks.splice(foundTask, 1);
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
