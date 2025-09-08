const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
