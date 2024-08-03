import { useState } from "react";

const TodoApp = ({ addTodo }) => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="what is the task today? "
          value={value}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoApp;
