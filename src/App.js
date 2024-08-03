import { useEffect, useState } from "react";
import "./App.css";
import TodoApp from "./components/todo";
import TodoList from "./components/todolist";
import { v4 as uuidV4 } from "uuid";
import EditTask from "./components/editTodo";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const id = uuidV4();
    setTodos([
      ...todos,
      { id, task: todo, completed: false, isEditing: false },
    ]);
  };

  //storing data in local
  useEffect(() => {
    if (todos.length === 0) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //getting data from storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos || []);
  }, []);

  const updateTaskDone = (taskIndex, newCompleted) => {
    // setTodos((prev) => {
    //   const newTodos = [...prev];
    //   newTodos[taskIndex].completed = newCompleted;
    //   return newTodos;
    // });
    const newTodos = [...todos];
    newTodos[taskIndex].completed = newCompleted;
    setTodos(newTodos);
  };

  const deleteTask = (indexToRemove) => {
    const newTodos = todos.filter((taskobj, index) => index !== indexToRemove);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTask = (indexToEdit) => {
    const newTodos = [...todos];
    newTodos[indexToEdit].isEditing = !todos.isEditing;
    setTodos(newTodos);
  };
  const editTodo = (newtodo, index) => {
    const newTodos = [...todos];
    newTodos[index].task = newtodo;
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  const totalTasksRemaining = todos.filter((t) => !(t.completed)).length;
  return (
    <div className="App">
      <div className="todo-app">
        <h2>Get Things Done!</h2>
        {todos.length !== 0 && (
          <p className="info-ctn">
            You have {totalTasksRemaining}task(s) to complete
          </p>
        )}
        <TodoApp addTodo={addTodo} />

        {todos.map((todos, key) =>
          todos.isEditing ? (
            <EditTask key={key} editTodo={(value) => editTodo(value, key)} task={todos} />
          ) : (
            <TodoList
              todos={todos}
              key={key}
              TaskDone={(completed) => updateTaskDone(key, completed)}
              removeTask={() => deleteTask(key)}
              editTask={(indexToEdit) => editTask(key)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
