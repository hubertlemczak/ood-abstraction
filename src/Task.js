class Task {
  // #dateDue;
  // #description;
  // #status;
  constructor(dateDue, description) {
    //Task due date - not all tasks have a due date. If a task has no
    //due date, dueDate will be null
    this.dateDue = dateDue;
    this.description = description;
    this.status = 'incomplete';
  }

  getDueDate() {
    return this.dateDue;
  }

  getStatus() {
    return this.status;
  }

  isComplete() {
    let status = false;
    if (this.getStatus() === 'complete') status = true;
    return status;
  }

  getDesc() {
    return this.description;
  }

  setComplete() {
    this.status = 'complete';
  }
}

// console.log(new Task().getStatus());
module.exports = Task;
