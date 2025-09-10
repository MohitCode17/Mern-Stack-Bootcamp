const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-gray-200 dark:bg-gray-800 dark:text-white">
      <h1 className="text-xl font-bold">🌐 My Website</h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition"
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
