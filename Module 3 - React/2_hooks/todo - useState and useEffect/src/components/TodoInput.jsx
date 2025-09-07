import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task..."
        className="px-4 py-2 rounded-lg bg-gray-800 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
