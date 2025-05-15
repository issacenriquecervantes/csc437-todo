import { TodoItem } from "./components/TodoItem.tsx";
import { AddTaskForm } from "./components/AddTaskForm.tsx";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Modal } from "./components/Modal.tsx";

interface AppProps {
  data: { id: string; name: string; completed: boolean }[];
}

function App(props: AppProps) {
  const [taskList, setTaskList] = useState(props.data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderTaskList = taskList.map((task) => (
    <TodoItem
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  function addTask(name: string) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTaskList([...taskList, newTask]);
    setIsModalOpen(false);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = taskList.filter((task) => id !== task.id);
    setTaskList(remainingTasks);
  }

  return (
    <main className="p-4 flex flex-col gap-3">
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white rounded-md w-max"
      >
        Add Task
      </button>

      <Modal
        children={<AddTaskForm onNewTask={addTask} />}
        headerLabel="New Task"
        onCloseRequested={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />

      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {renderTaskList}
        </ul>
      </section>
    </main>
  );
}

export default App;
