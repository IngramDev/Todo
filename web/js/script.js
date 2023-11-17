const myTodo = new Todo()

myTodo.create_Item("TODO: Test Case","After issues are completed, continue working on completing Test Cases")
myTodo.create_Item("TODO: Meeting","Meeting with Rizwan at 2")
console.log("My Todo List: ")
console.log(myTodo)
myTodo.todo_items[0].toggleCheckmark()
myTodo.display_Todo_List()
