/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global all */
const TodoList = require("../todo");

describe("TodoList", () => {
  let todo;

  beforeEach(() => {
    todo = TodoList();
  });

  test("creating a new todo", () => {
    todo.add({ title: "Test Todo", dueDate: "2024-01-01" });
    expect(todo.all.length).toBe(1);
  });

  test("marking a todo as completed", () => {
    todo.add({ title: "Test Todo", dueDate: "2024-01-01" });
    todo.markAsComplete(0);
    expect(todo.all[0].completed).toBe(true);
  });

  test("retrieval of overdue items", () => {
    const currentDate = new Date("2024-01-03").toLocaleDateString("en-CA");
    todo.add({ title: "Overdue Todo", dueDate: "2024-01-01" });
    todo.add({ title: "Not Overdue Todo", dueDate: "2024-01-05" });

    const overdueItems = todo.overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].title).toBe("Overdue Todo");
  });

  test("retrieval of due today items", () => {
    const today = new Date().toLocaleDateString("en-CA");
    todo.add({ title: "Due Today Todo", dueDate: today });
    todo.add({ title: "Not Due Today Todo", dueDate: "2024-01-05" });

    const dueTodayItems = todo.dueToday();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe("Due Today Todo");
  });

  test("retrieval of due later items", () => {
    const currentDate = new Date("2024-01-03").toLocaleDateString("en-CA");
    todo.add({ title: "Due Later Todo", dueDate: "2024-01-05" });
    todo.add({ title: "Not Due Later Todo", dueDate: "2024-01-01" });

    const dueLaterItems = todo.dueLater();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].title).toBe("Due Later Todo");
  });
});
