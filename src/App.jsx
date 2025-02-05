import { useReducer, useMemo, useState, useCallback } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { taskReducer } from "./reducers/taskReducer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilter";
import { FaMoon, FaSun, FaToggleOn, FaToggleOff } from "react-icons/fa";

const App = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const { darkMode, toggleTheme } = useTheme();
  const [filter, setFilter] = useState("all");

  const toggleSection = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  const addTask = (text) =>
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text, completed: false },
    });
  const removeTask = useCallback(
    (id) => dispatch({ type: "REMOVE_TASK", payload: id }),
    []
  );
  const toggleTask = useCallback(
    (id) => dispatch({ type: "TOGGLE_COMPLETE", payload: id }),
    []
  );

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((task) => !task.completed);
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex gap-5">
        <button
          style={{ color: darkMode ? "white" : "black", cursor: "pointer" }}
          onClick={toggleTheme}
          className="mb-4 px-4 py-2 rounded-lg font-semibold transition-all  text-white "
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <button
          style={{ color: darkMode ? "white" : "black", cursor: "pointer" }}
          onClick={toggleSection}
          className="mb-4 px-4 py-2 rounded-lg font-semibold transition-all  text-white "
        >
          {isSectionVisible ? (
            <FaToggleOn size={20} />
          ) : (
            <FaToggleOff size={20} />
          )}
        </button>
      </div>
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {isSectionVisible && (
          <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <TaskForm addTask={addTask} />
            <TaskFilters filter={filter} setFilter={setFilter} />
            <TaskList
              tasks={filteredTasks}
              removeTask={removeTask}
              toggleTask={toggleTask}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
