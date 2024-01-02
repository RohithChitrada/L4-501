const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    const today = new Date();
    const overdueItems = [];
    for (const item of all) {
      if (
        new Date(item.dueDate) < today &&
        !item.completed &&
        new Date(item.dueDate).toDateString() != today.toDateString()
      ) {
        overdueItems.push(item);
      }
    }
    return overdueItems;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    const today = new Date();
    const dueTodayItems = [];
    for (const item of all) {
      if (new Date(item.dueDate).toDateString() === today.toDateString()) {
        dueTodayItems.push(item);
      }
    }
    return dueTodayItems;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    const today = new Date();
    const dueLaterItems = [];
    for (const item of all) {
      if (new Date(item.dueDate) > today && !item.completed) {
        dueLaterItems.push(item);
      }
    }
    return dueLaterItems;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // return OUTPUT_STRING
    let output = "";
    const today = new Date();
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const status = item.completed ? "[x]" : "[ ]";
      if (new Date(item.dueDate).toDateString() === today.toDateString()) {
        output += `${status} ${item.title}\n`;
      } else {
        output += `${status} ${item.title} ${item.dueDate}\n`;
      }
    }
    return output;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

// const todos = todoList();

// const formattedDate = d => {
//   return d.toISOString().split("T")[0]
// }

// var dateToday = new Date()
// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// )
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// )

// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
// todos.add({ title: 'Pay rent', dueDate: today, completed: true })
// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

// console.log("My Todo-list\n\n")

// console.log("Overdue")
// var overdues = todos.overdue()
// var formattedOverdues = todos.toDisplayableList(overdues)
// console.log(formattedOverdues)
// console.log("\n\n")

// console.log("Due Today")
// let itemsDueToday = todos.dueToday()
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
// console.log(formattedItemsDueToday)
// console.log("\n\n")

// console.log("Due Later")
// let itemsDueLater = todos.dueLater()
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
// console.log(formattedItemsDueLater)
// console.log("\n\n")

module.exports = todoList;
