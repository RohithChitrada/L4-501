/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global all */
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("todoList Test Suite ", () => {
  beforeAll(() => {
    add({
      title: " Test todo",
      completed: false,
      dueDate: new Date().toDateString(),
    });
  });
  test("sholud add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: " Test todo",
      completed: false,
      dueDate: new Date().toDateString(),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    const overdueTodos = all.filter(
      (todo) => new Date(todo.dueDate) < new Date(),
    );
    expect(overdueTodos.length).toBeGreaterThan(0);
  });

  test("should retrieve due today items", () => {
    const dueTodayTodos = all.filter(
      (todo) =>
        new Date(todo.dueDate).toDateString() === new Date().toDateString(),
    );
    expect(dueTodayTodos.length).toBeGreaterThan(0);
  });

  test("should retrieve due later items", () => {
    const dueLaterTodos = all.filter(
      (todo) =>
        new Date(todo.dueDate) > new Date() &&
        new Date(todo.dueDate).toDateString() != new Date().toDateString(),
    );
    expect(dueLaterTodos.length).toBe(0);
  });

  function toDisplayableList(todos) {
    return todos.filter((todo) => !todo.completed);
  }
});
