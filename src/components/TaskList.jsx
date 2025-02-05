const TaskList = ({ tasks, removeTask, toggleTask }) => {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.length === 0 && <p className="text-center">No tasks available.</p>}
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-2 border rounded-lg dark:border-gray-700"
        >
          <span
            className={`flex-1 cursor-pointer ${
              task.completed
                ? "line-through text-gray-500"
                : "text-gray-900 dark:text-white"
            }`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <button
            onClick={() => removeTask(task.id)}
            className="px-2 py-1 text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
