// Add the reference to the "TodoInterface"
import{ ToDoInterface } from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.

class Todo implements ToDoInterface{
  public tasks: string[];
  public task: string;

  constructor ( ) {}

  addTask(task) {
    this.tasks.push(task);
    console.log("task: " + task)
    return this.tasks.length;
  }

  listAllTasks() {
    console.log("List all tasks: ")
    // for (let task of this.tasks) {
    //   console.log(task);
    // }
    this.tasks.forEach((task)=>{
      console.log(task);
    });
  }

  deleteTask(task) {
    let foundTask = this.tasks.indexOf(task);
    this.tasks.splice(foundTask,1);
    return this.tasks.length;
  }
}



// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
