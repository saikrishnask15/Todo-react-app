import {
  faCheckSquare,
  faPenToSquare,
  faTrash,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = ({ todos, TaskDone, removeTask, editTask }) => {
  const { task, completed } = todos;
  const handleCompleted = () => {
    TaskDone(!completed);
  };
  return (
    <div className={completed ? "todo-list completed" : "todo-list"}>
      <div onClick={handleCompleted}>
        {completed !== false ? (
          <FontAwesomeIcon icon={faCheckSquare} />
        ) : (
          <FontAwesomeIcon icon={faSquare} />
        )}
      </div>
      <p>{task}</p>
      <FontAwesomeIcon
        icon={faPenToSquare}
        onClick={() => editTask()}
      />
      <FontAwesomeIcon className="trash" icon={faTrash} onClick={() => removeTask()} />
    </div>
  );
};

export default TodoList;
