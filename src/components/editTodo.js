import { useState } from "react";

const EditTask = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value);
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTask;
