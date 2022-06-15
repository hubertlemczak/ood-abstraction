const TaskList = require('../src/TaskList.js');

describe('TaskList', () => {
  let taskList;

  todayPlusDays = (days) => {
    return new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * days);
  };

  beforeEach(() => {
    taskList = new TaskList();
  });

  it('returns overdue tasks', () => {
    //None of these should be overdue
    taskList.addTask(todayPlusDays(1), 'due tomorrow');
    taskList.addTask(null, 'no due date');

    taskList.addTask(todayPlusDays(-1), 'due yesterday but complete');
    taskList.setTaskComplete('due yesterday but complete');

    //These are overdue
    taskList.addTask(todayPlusDays(-1), 'due yesterday');
    taskList.addTask(todayPlusDays(-2), 'due 2 days ago');

    expect(taskList.getOverdueTasks()[0].description).toEqual('due yesterday');
    expect(taskList.getOverdueTasks()[1].description).toEqual('due 2 days ago');
  });
});
