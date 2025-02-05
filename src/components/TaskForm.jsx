import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
