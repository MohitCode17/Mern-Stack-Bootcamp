import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();

  return (
    <nav
      className={`flex justify-between w-full items-center px-6 py-3 shadow-md ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h1 className="text-xl font-bold">🚀 Dashboard</h1>
      <div className="flex items-center gap-4">
        <p>Hello, {user.name} 👋</p>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
