import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  name: string;
  id: string;
  completed: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TodoItem(props: TodoItemProps) {
  return (
    <li className="flex gap-5">
      <label>
        <input
          type="checkbox"
          defaultChecked={props.completed}
          id={props.id}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />{" "}
        {props.name}
      </label>
      <button onClick={() => props.deleteTask(props.id)}>
        <FontAwesomeIcon
          icon={faTrash}
          className="text-gray-500"
          title="Delete Item"
        />
      </button>
    </li>
  );
}
