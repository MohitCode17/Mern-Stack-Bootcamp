const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-1 rounded-lg ${
          filter === "all" ? "bg-blue-500" : "bg-gray-700"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-1 rounded-lg ${
          filter === "completed" ? "bg-blue-500" : "bg-gray-700"
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-1 rounded-lg ${
          filter === "pending" ? "bg-blue-500" : "bg-gray-700"
        }`}
      >
        Pending
      </button>
    </div>
  );
};

export default TodoFilter;
