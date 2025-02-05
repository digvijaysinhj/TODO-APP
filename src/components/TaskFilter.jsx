const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4 my-4">
      {["all", "active", "completed"].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded-lg transition-all ${
            filter === type
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
