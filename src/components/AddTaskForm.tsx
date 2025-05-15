import { useState } from "react";

interface AddTaskFormProps {
  onNewTask: (name: string) => void;
}

export function AddTaskForm(props: AddTaskFormProps) {
  const [name, setName] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit() {
    props.onNewTask(name);
    setName("");
  }

  return (
    <div className="flex gap-2">
      <input
        placeholder="New task name"
        className="p-2 border-1 rounded-sm"
        name="text"
        value={name}
        onChange={handleChange}
      />
      <button
        className="p-2 bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white rounded-md"
        onClick={handleSubmit}
      >
        Add task
      </button>
    </div>
  );
}
