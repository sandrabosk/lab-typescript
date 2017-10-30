class myTaskList {

  public tasks: string[];
  public task: string;

  constructor ( ) {
    this.tasks = [];
  }



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

let tasklist = new myTaskList();
//
console.log("Number of items:", tasklist.addTask('This is our first task'));
console.log("Number of items:", tasklist.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 3!! 🤓'));

tasklist.listAllTasks();
console.log("Number of items:", tasklist.deleteTask('Finish this iteration 1!! 🤓'));
tasklist.listAllTasks();
