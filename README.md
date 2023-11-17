# TODO List
An interactive todo list that allows you to add and remove TODO Items. It will also let you mark an item as complete
# Designs
## Class Diagram

```mermaid
classDiagram
    direction LR
    Todo  --* "1..*" TodoItem
    class TodoItem
    TodoItem:-int id
    TodoItem:-String title
    TodoItem:-boolean isChecked
    TodoItem:-String description
    TodoItem:+getID()
    TodoItem:+setter_getters_Title()
    TodoItem:+setter_getters_Description()()
    TodoItem:+toggleCheckmark()

    class Todo
    Todo: -List~TodoItem~ todoItems
    Todo: -createItem(String title, String Description)
    Todo: +removeTodo(TodoItem item)
    Todo: +updateItem(TodoItem item)
    Todo: +displayList()

```
## Psuedo Code
### TODO Class
```pseudo
START addTodo RECEIVING title, Description
    
END

START RemoveItem

END

START UpdateItem

END
```

### TODO Class
```pseudo
START __CONSTRUCTOR RECEVING pTitle, pDescription
    Set title to pTitle
    Set description to pDescription
    Set isChecked to FALSE
END 

START toggleCheckmark 
    Toggle THIS.isChecked 
END
```
