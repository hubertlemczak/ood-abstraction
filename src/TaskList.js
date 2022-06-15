const Task = require('./Task');

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(dueDate, desc) {
    const task = new Task(dueDate, desc);
    this.tasks.push(task);
  }

  getOverdueTasks() {
    const today = new Date();
    const overdueTasks = [];
    for (const task of this.tasks) {
      if (!task.isComplete() && task.getDueDate() && today > task.getDueDate())
        overdueTasks.push(task);
    }
    return overdueTasks;
  }

  setTaskComplete(desc) {
    this.tasks.forEach((task) => {
      if (task.getDesc() === desc) task.setComplete();
    });
  }
}

module.exports = TaskList;
